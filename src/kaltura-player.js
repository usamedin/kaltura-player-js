// @flow
// import {EventType as UIEventType} from '@playkit-js/playkit-js-ui';
import {Provider} from 'playkit-js-providers';
import {supportLegacyOptions} from './common/utils/setup-helpers';
import getLogger from './common/utils/logger';
import {addKalturaParams} from './common/utils/kaltura-params';
import {evaluatePluginsConfig} from './common/plugins/plugins-config';
import {addKalturaPoster} from 'poster';
import './assets/style.css';
// import {UIWrapper} from './common/ui-wrapper';
import {PlaylistManager} from './common/playlist/playlist-manager';
import {PlaylistEventType} from './common/playlist/playlist-event-type';
import {CastEventType} from './common/cast/cast-event-type';
import {RemotePlayerManager} from './common/cast/remote-player-manager';
import {BaseRemotePlayer} from './common/cast/base-remote-player';
import {RemoteSession} from './common/cast/remote-session';
import {
  AdsController,
  BasePlugin,
  Error,
  EventManager,
  EventType as CoreEventType,
  FakeEvent,
  FakeEventTarget,
  loadPlayer,
  TextStyle,
  Track,
  Utils
} from '@playkit-js/playkit-js';

class KalturaPlayer extends FakeEventTarget {
  _eventManager: EventManager;
  _mediaInfo: ?ProviderMediaInfoObject = null;
  _remotePlayer: ?BaseRemotePlayer = null;
  _localPlayer: Player;
  _provider: Provider;
  _uiWrapper: UIWrapper;
  _logger: any;

  constructor(options: KPOptionsObject) {
    super();
    this._eventManager = new EventManager();
    this._localPlayer = loadPlayer(options);
    this._logger = getLogger('KalturaPlayer' + Utils.Generator.uniqueId(5));
    // this._uiWrapper = new UIWrapper(this, options);
    this._provider = new Provider(options.provider, __VERSION__);
    this._playlistManager = new PlaylistManager(this, options);
    this._playlistManager.configure(options.playlist);
    Object.values(CoreEventType).forEach(coreEvent => this._eventManager.listen(this._localPlayer, coreEvent, e => this.dispatchEvent(e)));
  }

  loadMedia(mediaInfo: ProviderMediaInfoObject): Promise<*> {
    this._logger.debug('loadMedia', mediaInfo);
    this._mediaInfo = mediaInfo;
    this.reset();
    this._localPlayer.loadingMedia = true;
    // this._uiWrapper.setLoadingSpinnerState(true);
    return this._provider
      .getMediaConfig(mediaInfo)
      .then(mediaConfig => {
        this.setMedia(mediaConfig);
        return Promise.resolve(mediaConfig);
      })
      .catch(e =>
        this._localPlayer.dispatchEvent(
          new FakeEvent(CoreEventType.ERROR, new Error(Error.Severity.CRITICAL, Error.Category.PLAYER, Error.Code.LOAD_FAILED, e))
        )
      );
  }

  setMedia(mediaConfig: ProviderMediaConfigObject): void {
    this._logger.debug('setMedia', mediaConfig);
    const playerConfig = Utils.Object.copyDeep(mediaConfig);
    Utils.Object.mergeDeep(playerConfig.sources, this._localPlayer.config.sources);
    Utils.Object.mergeDeep(playerConfig.session, this._localPlayer.config.session);
    Object.keys(this._localPlayer.config.plugins).forEach(name => {
      playerConfig.plugins[name] = {};
    });
    addKalturaPoster(playerConfig.sources, mediaConfig.sources, this._localPlayer.dimensions);
    addKalturaParams(this, playerConfig);
    // this._uiWrapper.setSeekbarConfig(mediaConfig, this._localPlayer.config.ui);
    this.configure(playerConfig);
  }

  loadPlaylist(playlistInfo: ProviderPlaylistInfoObject, playlistCustomConfig: KPPlaylistConfigObject): Promise<*> {
    this._logger.debug('loadPlaylist', playlistInfo);
    // this._uiWrapper.setLoadingSpinnerState(true);
    return this._provider
      .getPlaylistConfig(playlistInfo)
      .then(playlistConfig => this._mergePlaylistConfigAndSet(playlistConfig, playlistCustomConfig))
      .catch(e =>
        this._localPlayer.dispatchEvent(
          new FakeEvent(CoreEventType.ERROR, new Error(Error.Severity.CRITICAL, Error.Category.PLAYER, Error.Code.LOAD_FAILED, e))
        )
      );
  }

  loadPlaylistByEntryList(entryList: ProviderEntryListObject, playlistCustomConfig: KPPlaylistConfigObject): Promise<*> {
    this._logger.debug('loadPlaylistByEntryList', entryList);
    // this._uiWrapper.setLoadingSpinnerState(true);
    return this._provider
      .getEntryListConfig(entryList)
      .then(playlistConfig => this._mergePlaylistConfigAndSet(playlistConfig, playlistCustomConfig))
      .catch(e =>
        this._localPlayer.dispatchEvent(
          new FakeEvent(CoreEventType.ERROR, new Error(Error.Severity.CRITICAL, Error.Category.PLAYER, Error.Code.LOAD_FAILED, e))
        )
      );
  }

  setPlaylist(playlistConfig: KPPlaylistConfigObject): void {
    this._logger.debug('setPlaylist', playlistConfig);
    const config = {playlist: playlistConfig, plugins: this._localPlayer.config.plugins};
    // $FlowFixMe
    evaluatePluginsConfig(config);
    this._localPlayer.configure({plugins: config.plugins});
    this._playlistManager.reset();
    this._playlistManager.configure(config.playlist);
  }

  getMediaInfo(): ?ProviderMediaInfoObject {
    return Utils.Object.copyDeep(this._mediaInfo);
  }

  configure(config: Object = {}): void {
    config = supportLegacyOptions(config);
    // $FlowFixMe
    evaluatePluginsConfig(config);
    this._localPlayer.configure(config);
    if (config.ui) {
      this._uiWrapper.setConfig(config.ui);
    }
  }

  ready(): Promise<*> {
    return this._localPlayer.ready();
  }

  load(): void {
    this._localPlayer.load();
  }

  play(): void {
    this._localPlayer.play();
  }

  pause(): void {
    this._localPlayer.pause();
  }

  getView(): HTMLElement {
    return this._localPlayer.getView();
  }

  getVideoElement(): ?HTMLVideoElement {
    return this._localPlayer.getVideoElement();
  }

  reset(): void {
    this._localPlayer.reset();
    // this._uiWrapper.reset();
  }

  destroy(): void {
    const targetId = this.config.ui.targetId;
    this._localPlayer.destroy();
    this._uiWrapper.destroy();
    this._eventManager.destroy();
    const targetContainer = document.getElementById(targetId);
    if (targetContainer && targetContainer.parentNode) {
      Utils.Dom.removeChild(targetContainer.parentNode, targetContainer);
    }
  }

  isLive(): boolean {
    return this._localPlayer.isLive();
  }

  isDvr(): boolean {
    return this._localPlayer.isDvr();
  }

  seekToLiveEdge(): void {
    this._localPlayer.seekToLiveEdge();
  }

  getStartTimeOfDvrWindow(): number {
    return this._localPlayer.getStartTimeOfDvrWindow();
  }

  getTracks(type?: string): Array<Track> {
    return this._localPlayer.getTracks(type);
  }

  getActiveTracks(): Object {
    return this._localPlayer.getActiveTracks();
  }

  selectTrack(track: ?Track): void {
    this._localPlayer.selectTrack(track);
  }

  hideTextTrack(): void {
    this._localPlayer.hideTextTrack();
  }

  enableAdaptiveBitrate(): void {
    this._localPlayer.enableAdaptiveBitrate();
  }

  isAdaptiveBitrateEnabled(): boolean {
    return this._localPlayer.isAdaptiveBitrateEnabled();
  }

  setTextDisplaySettings(settings: Object): void {
    this._localPlayer.setTextDisplaySettings(settings);
  }

  isFullscreen(): boolean {
    return this._localPlayer.isFullscreen();
  }

  notifyEnterFullscreen(): void {
    this._localPlayer.notifyEnterFullscreen();
  }

  notifyExitFullscreen(): void {
    this._localPlayer.notifyExitFullscreen();
  }

  enterFullscreen(): void {
    this._localPlayer.enterFullscreen();
  }

  exitFullscreen(): void {
    this._localPlayer.exitFullscreen();
  }

  enterPictureInPicture(): void {
    this._localPlayer.enterPictureInPicture();
  }

  exitPictureInPicture(): void {
    this._localPlayer.exitPictureInPicture();
  }

  isInPictureInPicture(): boolean {
    return this._localPlayer.isInPictureInPicture();
  }

  isPictureInPictureSupported(): boolean {
    return this._localPlayer.isPictureInPictureSupported();
  }

  getLogLevel(name?: string): Object {
    return this._localPlayer.getLogLevel(name);
  }

  startCasting(type?: string): Promise<*> {
    return RemotePlayerManager.startCasting(type);
  }

  isCastAvailable(type?: string): boolean {
    return RemotePlayerManager.isCastAvailable(type);
  }

  getCastSession(): ?RemoteSession {
    return null;
  }

  stopCasting(): void {
    // Empty implementation
  }

  isCasting(): boolean {
    return false;
  }

  isVr(): boolean {
    return this._localPlayer.isVr();
  }

  toggleVrStereoMode(): void {
    this._localPlayer.toggleVrStereoMode();
  }

  isInVrStereoMode(): boolean {
    return this._localPlayer.isInVrStereoMode();
  }

  setLogLevel(level: Object, name?: string) {
    this._localPlayer.setLogLevel(level, name);
  }

  set textStyle(style: TextStyle): void {
    this._localPlayer.textStyle = style;
  }

  get textStyle(): ?TextStyle {
    return this._localPlayer.textStyle;
  }

  get buffered(): ?TimeRanges {
    return this._localPlayer.buffered;
  }

  set currentTime(to: number): void {
    this._localPlayer.currentTime = to;
  }

  get currentTime(): number {
    return this._localPlayer.currentTime;
  }

  get duration(): number {
    return this._localPlayer.duration;
  }

  set volume(vol: number): void {
    this._localPlayer.volume = vol;
  }

  get volume(): number {
    return this._localPlayer.volume;
  }

  get paused(): boolean {
    return this._localPlayer.paused;
  }

  get seeking(): boolean {
    return this._localPlayer.seeking;
  }

  set playsinline(playsinline: boolean): void {
    this._localPlayer.playsinline = playsinline;
  }

  get playsinline(): boolean {
    return this._localPlayer.playsinline;
  }

  set muted(mute: boolean): void {
    this._localPlayer.muted = mute;
  }

  get muted(): boolean {
    return this._localPlayer.muted;
  }

  get src(): string {
    return this._localPlayer.src;
  }

  get dimensions(): Object {
    return this._localPlayer.dimensions;
  }

  get poster(): string {
    return this._localPlayer.poster;
  }

  get ended(): boolean {
    return this._localPlayer.ended;
  }

  set playbackRate(rate: number): void {
    this._localPlayer.playbackRate = rate;
  }

  get playbackRate(): number {
    return this._localPlayer.playbackRate;
  }

  get playbackRates(): Array<number> {
    return this._localPlayer.playbackRates;
  }

  get defaultPlaybackRate(): number {
    return this._localPlayer.defaultPlaybackRate;
  }

  get engineType(): string {
    return this._localPlayer.engineType;
  }

  get streamType(): string {
    return this._localPlayer.streamType;
  }

  get env(): Object {
    return this._localPlayer.env;
  }

  get config(): Object {
    return this._localPlayer.config;
  }

  set loadingMedia(loading: boolean): void {
    this._localPlayer.loadingMedia = loading;
  }

  get ads(): ?AdsController {
    return this._localPlayer.ads;
  }

  get plugins(): {[name: string]: BasePlugin} {
    return this._localPlayer.plugins;
  }

  get playlist(): PlaylistManager {
    return this._playlistManager;
  }

  get Event(): KPEventTypes {
    return {
      Cast: CastEventType,
      Core: CoreEventType,
      Playlist: PlaylistEventType,
      UI: {},
      // For backward compatibility
      ...CoreEventType
    };
  }

  get TextStyle(): typeof TextStyle {
    return this._localPlayer.TextStyle;
  }

  get State(): PKStateTypes {
    return this._localPlayer.State;
  }

  get Track(): PKTrackTypes {
    return this._localPlayer.Track;
  }

  get LogLevelType(): PKLogLevelTypes {
    return this._localPlayer.LogLevelType;
  }

  get LogLevel(): PKLogLevels {
    return this._localPlayer.LogLevel;
  }

  get AbrMode(): PKAbrModes {
    return this._localPlayer.AbrMode;
  }

  get MediaType(): PKMediaTypes {
    return this._localPlayer.MediaType;
  }

  get StreamType(): PKStreamTypes {
    return this._localPlayer.StreamType;
  }

  get EngineType(): PKEngineTypes {
    return this._localPlayer.EngineType;
  }

  get Error(): typeof Error {
    return this._localPlayer.Error;
  }

  // $FlowFixMe
  _mergePlaylistConfigAndSet(playlistConfigFromAPI: KPPlaylistConfigObject, playlistOptions: KPPlaylistConfigObject = {}): void {
    playlistOptions.items = playlistConfigFromAPI.items.map((item, index) => {
      return {sources: item.sources, config: playlistOptions.items && playlistOptions.items[index] && playlistOptions.items[index].config};
    });
    Utils.Object.mergeDeep(playlistConfigFromAPI, playlistOptions);
    this.setPlaylist(playlistConfigFromAPI);
  }
}

export {KalturaPlayer};

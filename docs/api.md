<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

- [KalturaPlayers][1]
- [KPPlaylistConfigObject][2]
  - [Parameters][3]
- [KPPlaylistCountdownOptions][4]
  - [Parameters][5]
- [KPPlaylistItemConfigObject][6]
  - [Properties][7]
- [KPPlaylistMetadata][8]
  - [Properties][9]
- [KPPlaylistOptions][10]
  - [Properties][11]
- [BaseRemotePlayer][12]
  - [Parameters][13]
  - [loadMedia][14]
    - [Parameters][15]
  - [setMedia][16]
    - [Parameters][17]
  - [getMediaInfo][18]
  - [configure][19]
    - [Parameters][20]
  - [ready][21]
  - [load][22]
  - [play][23]
  - [pause][24]
  - [reset][25]
  - [destroy][26]
  - [isLive][27]
    - [Examples][28]
  - [isDvr][29]
    - [Examples][30]
  - [seekToLiveEdge][31]
  - [getStartTimeOfDvrWindow][32]
    - [Examples][33]
  - [getTracks][34]
    - [Parameters][35]
    - [Examples][36]
  - [getActiveTracks][37]
    - [Examples][38]
  - [selectTrack][39]
    - [Parameters][40]
  - [hideTextTrack][41]
  - [enableAdaptiveBitrate][42]
  - [isAdaptiveBitrateEnabled][43]
    - [Examples][44]
  - [setTextDisplaySettings][45]
    - [Parameters][46]
  - [startCasting][47]
  - [stopCasting][48]
  - [isCasting][49]
    - [Examples][50]
  - [isCastAvailable][51]
    - [Examples][52]
  - [getCastSession][53]
    - [Examples][54]
  - [isVr][55]
    - [Examples][56]
  - [toggleVrStereoMode][57]
  - [isInVrStereoMode][58]
    - [Examples][59]
  - [ads][60]
    - [Examples][61]
  - [textStyle][62]
    - [Parameters][63]
  - [textStyle][64]
    - [Examples][65]
  - [buffered][66]
    - [Examples][67]
  - [currentTime][68]
    - [Parameters][69]
  - [currentTime][70]
    - [Examples][71]
  - [duration][72]
    - [Examples][73]
  - [volume][74]
    - [Parameters][75]
  - [volume][76]
    - [Examples][77]
  - [paused][78]
    - [Examples][79]
  - [ended][80]
    - [Examples][81]
  - [seeking][82]
    - [Examples][83]
  - [muted][84]
    - [Parameters][85]
  - [muted][86]
    - [Examples][87]
  - [src][88]
    - [Examples][89]
  - [poster][90]
    - [Examples][91]
  - [playbackRate][92]
    - [Parameters][93]
  - [playbackRate][94]
    - [Examples][95]
  - [engineType][96]
    - [Examples][97]
  - [streamType][98]
    - [Examples][99]
  - [type][100]
    - [Examples][101]
  - [defaultConfig][102]
    - [Examples][103]
  - [Type][104]
    - [Examples][105]
  - [isSupported][106]
    - [Examples][107]
- [CastEventType][108]
  - [Examples][109]
- [PlayerSnapshot][110]
  - [Parameters][111]
  - [startTime][112]
  - [autoplay][113]
  - [audioLanguage][114]
  - [textLanguage][115]
  - [mediaInfo][116]
  - [textStyle][117]
  - [advertising][118]
  - [volume][119]
  - [muted][120]
- [RemoteControl][121]
  - [Parameters][122]
  - [getPlayerSnapshot][123]
  - [getUIWrapper][124]
  - [onRemoteDeviceDisconnected][125]
    - [Parameters][126]
  - [onRemoteDeviceConnected][127]
    - [Parameters][128]
  - [onRemoteDeviceAvailable][129]
    - [Parameters][130]
  - [onRemoteDeviceConnecting][131]
  - [onRemoteDeviceDisconnecting][132]
  - [onRemoteDeviceConnectFailed][133]
- [RemotePayload][134]
  - [Parameters][135]
  - [player][136]
- [RemoteConnectedPayload][137]
  - [Parameters][138]
  - [ui][139]
  - [session][140]
- [RemoteDisconnectedPayload][141]
  - [Parameters][142]
  - [snapshot][143]
- [RemoteAvailablePayload][144]
  - [Parameters][145]
  - [available][146]
- [RemotePlayerUI][147]
  - [playbackUI][148]
    - [Parameters][149]
  - [idleUI][150]
    - [Parameters][151]
  - [adsUI][152]
    - [Parameters][153]
  - [liveUI][154]
    - [Parameters][155]
  - [errorUI][156]
    - [Parameters][157]
  - [uis][158]
- [IRemotePlayer][159]
  - [textStyle][160]
  - [muted][161]
  - [playbackRate][162]
  - [volume][163]
  - [currentTime][164]
  - [buffered][165]
  - [duration][166]
  - [paused][167]
  - [ended][168]
  - [seeking][169]
  - [src][170]
  - [poster][171]
  - [engineType][172]
  - [streamType][173]
  - [type][174]
  - [ads][175]
  - [addEventListener][176]
    - [Parameters][177]
  - [removeEventListener][178]
    - [Parameters][179]
  - [dispatchEvent][180]
    - [Parameters][181]
  - [loadMedia][182]
    - [Parameters][183]
  - [setMedia][184]
    - [Parameters][185]
  - [getMediaInfo][186]
  - [configure][187]
    - [Parameters][188]
  - [ready][189]
  - [load][190]
  - [play][191]
  - [pause][192]
  - [reset][193]
  - [destroy][194]
  - [isLive][195]
  - [isDvr][196]
  - [seekToLiveEdge][197]
  - [getStartTimeOfDvrWindow][198]
  - [getTracks][199]
    - [Parameters][200]
  - [getActiveTracks][201]
  - [selectTrack][202]
    - [Parameters][203]
  - [hideTextTrack][204]
  - [enableAdaptiveBitrate][205]
  - [isAdaptiveBitrateEnabled][206]
  - [setTextDisplaySettings][207]
    - [Parameters][208]
  - [startCasting][209]
  - [stopCasting][210]
  - [isCasting][211]
  - [isCastAvailable][212]
  - [getCastSession][213]
  - [isVr][214]
  - [toggleVrStereoMode][215]
  - [isInVrStereoMode][216]
  - [Type][217]
  - [isSupported][218]
- [RemoteSession][219]
  - [Parameters][220]
  - [deviceFriendlyName][221]
  - [id][222]
  - [resuming][223]
- [PlaylistEventType][224]
  - [Examples][225]
- [PlaylistItem][226]
  - [Parameters][227]
  - [sources][228]
  - [config][229]
  - [isPlayable][230]
- [PlaylistManager][231]
  - [Parameters][232]
  - [playNext][233]
  - [playPrev][234]
  - [playItem][235]
    - [Parameters][236]
  - [items][237]
  - [next][238]
  - [prev][239]
  - [id][240]
  - [metadata][241]
  - [countdown][242]
  - [options][243]
- [getPlayers][244]
- [getPlayer][245]
  - [Parameters][246]

## KalturaPlayers

a map of player instances by player ids

Type: [Object][247]&lt;[string][248], KalturaPlayer>

## KPPlaylistConfigObject

Type: [Object][247]

### Parameters

- `id` **[string][248]** The playlist id
- `metadata` **[KPPlaylistMetadata][249]** The playlist metadata
- `options` **[KPPlaylistOptions][250]** The playlist options
- `countdown` **[KPPlaylistCountdownOptions][251]** The playlist countdown config
- `items` **[Array][252]&lt;[PlaylistItem][253]>** The playlist items

## KPPlaylistCountdownOptions

Type: [Object][247]

### Parameters

- `timeToShow` **[number][254]?** When the countdown will appear (by default is towards the end)
- `duration` **[number][254]** How match time the countdown will appear (optional, default `10`)
- `showing` **[boolean][255]** Whether to show the countdown (optional, default `true`)

## KPPlaylistItemConfigObject

Type: [Object][247]

### Properties

- `countdown` **[KPPlaylistCountdownOptions][251]?** Countdown options

## KPPlaylistMetadata

Type: [Object][247]

### Properties

- `name` **[string][248]** The playlist name
- `description` **[string][248]** The playlist description

## KPPlaylistOptions

Type: [Object][247]

### Properties

- `autoContinue` **[boolean][255]** Whether to continue to the next item automatically

## BaseRemotePlayer

**Extends FakeEventTarget**

Basic remote player.
Implements the Kaltura Player playback, ads, tracks,vr and cast APIs.
Remote players should extend this class and implement the needed API.

### Parameters

- `name` **[string][248]** Remote player name.
- `config` **[Object][247]** Cast configuration.
- `remoteControl` **[RemoteControl][256]** Remote control.

### loadMedia

Loads a media to the receiver application.

#### Parameters

- `mediaInfo` **[Object][247]** The entry media info.

Returns **[Promise][257]&lt;void>** Promise to indicate load succeed or failed.

### setMedia

Sets a media to the remote player..

#### Parameters

- `mediaConfig` **[Object][247]** Media configuration to set.

Returns **void**

### getMediaInfo

Gets the media Info.

Returns **[Object][247]?** The media info.

### configure

Configure the remote player

#### Parameters

- `config` **[Object][247]** Configuration to set. (optional, default `{}`)

Returns **void**

### ready

The remote player readiness.

Returns **[Promise][257]&lt;any>** Promise which resolved when the remote player is ready.

### load

Load the remote player.

Returns **void**

### play

Play/resume the remote player.

Returns **void**

### pause

Pause the remote player.

Returns **void**

### reset

Reset the remote player.

Returns **void**

### destroy

Destroy the remote player.

Returns **void**

### isLive

#### Examples

```javascript
BaseRemotePlayer.prototype.isLive(); // false
```

Returns **[boolean][255]** Whether the current playback is a live playback.

### isDvr

#### Examples

```javascript
BaseRemotePlayer.prototype.isDvr(); // false
```

Returns **[boolean][255]** Whether the current live playback has DVR window. In case of non-live playback will return false.

### seekToLiveEdge

Seeks to the live edge.

Returns **void**

### getStartTimeOfDvrWindow

#### Examples

```javascript
BaseRemotePlayer.prototype.getStartTimeOfDvrWindow(); // 0
```

Returns **[number][254]** The start time of the DVR window.

### getTracks

#### Parameters

- `type` **[string][248]?** Track type.

#### Examples

```javascript
BaseRemotePlayer.prototype.getTracks(); // []
```

Returns **[Array][252]&lt;Track>** The remote player tracks.

### getActiveTracks

#### Examples

```javascript
BaseRemotePlayer.prototype.getTracks(); // {audio: undefined, video: undefined, text: undefined}
```

Returns **[Object][247]** The remote player active tracks.

### selectTrack

Select a certain track to be active.

#### Parameters

- `track` **Track** The track to activate.

Returns **void**

### hideTextTrack

Hides the active text track.

Returns **void**

### enableAdaptiveBitrate

Enables automatic adaptive bitrate switching.

Returns **void**

### isAdaptiveBitrateEnabled

#### Examples

```javascript
BaseRemotePlayer.prototype.isAdaptiveBitrateEnabled(); // true
```

Returns **[boolean][255]** Whether adaptive bitrate is enabled.

### setTextDisplaySettings

Sets the text display settings.

#### Parameters

- `settings` **[Object][247]** Text settings.

Returns **void**

### startCasting

Start casting.

Returns **[Promise][257]&lt;any>** A promise to indicate session is starting, or failed

### stopCasting

Stops the current cast session.

Returns **void**

### isCasting

#### Examples

```javascript
BaseRemotePlayer.prototype.isCasting(); // true
```

Returns **[boolean][255]** Whether casting is currently active.

### isCastAvailable

#### Examples

```javascript
BaseRemotePlayer.prototype.isCastAvailable(); // true
```

Returns **[boolean][255]** Whether casting is available.

### getCastSession

Gets the current remote session.

#### Examples

```javascript
BaseRemotePlayer.prototype.getCastSession(); // new RemoteSession('', '')
```

Returns **[RemoteSession][258]** The remote session.

### isVr

#### Examples

```javascript
BaseRemotePlayer.prototype.isVr(); // false
```

Returns **[boolean][255]** Whether the current media is of VR type (360 content).

### toggleVrStereoMode

Toggles VR mode on the current content.

Returns **void**

### isInVrStereoMode

#### Examples

```javascript
BaseRemotePlayer.prototype.isInVrStereoMode(); // false
```

Returns **[boolean][255]** Whether the current content displayed in VR mode.

### ads

The remote player ads controller.

Type: [Object][247]?

#### Examples

```javascript
BaseRemotePlayer.prototype.ads; // null
```

Returns **[Object][247]?**

### textStyle

Setter.

#### Parameters

- `style` **TextStyle** The text style to set.

Returns **void**

### textStyle

Getter.

#### Examples

```javascript
BaseRemotePlayer.prototype.textStyle; // new TextStyle()
```

Returns **TextStyle** The current text style.

### buffered

Gets the first buffered range of the remote player.

#### Examples

```javascript
BaseRemotePlayer.prototype.buffered; // []
```

Returns **[Array][252]&lt;any>** First buffered range in seconds.

### currentTime

Setter.

#### Parameters

- `to` **[number][254]** The number to set in seconds.

Returns **void**

### currentTime

Getter.

#### Examples

```javascript
BaseRemotePlayer.prototype.currentTime; // 0
```

Returns **[number][254]** The current time in seconds.

### duration

#### Examples

```javascript
BaseRemotePlayer.prototype.duration; // 0
```

Returns **[number][254]** The duration in seconds.

### volume

Setter.

#### Parameters

- `vol` **[number][254]** The volume to set in the range of 0-1.

Returns **void**

### volume

Getter.

#### Examples

```javascript
BaseRemotePlayer.prototype.volume; // 1
```

Returns **[number][254]** The current volume in the range of 0-1.

### paused

#### Examples

```javascript
BaseRemotePlayer.prototype.paused; // false
```

Returns **[boolean][255]** Whether the cast player is in paused state.

### ended

#### Examples

```javascript
BaseRemotePlayer.prototype.ended; // false
```

Returns **[boolean][255]** Whether the cast player is in ended state.

### seeking

#### Examples

```javascript
BaseRemotePlayer.prototype.seeking; // false
```

Returns **[boolean][255]** Whether the cast player is in seeking state.

### muted

Setter.

#### Parameters

- `mute` **[boolean][255]** The mute value to set.

Returns **void**

### muted

Getter.

#### Examples

```javascript
BaseRemotePlayer.prototype.muted; // false
```

Returns **[boolean][255]** The muted state.

### src

#### Examples

```javascript
BaseRemotePlayer.prototype.src; // ''
```

Returns **[string][248]** The current playing source url.

### poster

#### Examples

```javascript
BaseRemotePlayer.prototype.poster; // ''
```

Returns **[string][248]** The current poster url.

### playbackRate

Setter.

#### Parameters

- `rate` **[number][254]** The playback rate to set.

Returns **void**

### playbackRate

#### Examples

```javascript
BaseRemotePlayer.prototype.playbackRate; // 1
```

Returns **[string][248]** The current playback rate.

### engineType

#### Examples

```javascript
BaseRemotePlayer.prototype.engineType; // ''
```

Returns **[string][248]** The active engine type.

### streamType

#### Examples

```javascript
BaseRemotePlayer.prototype.streamType; // ''
```

Returns **[string][248]** The active stream type.

### type

#### Examples

```javascript
BaseRemotePlayer.prototype.type; // BaseRemotePlayer.Type
```

Returns **[string][248]** The remote player type.

### defaultConfig

Default configuration of the remote player.

Type: [Object][247]

#### Examples

```javascript
BaseRemotePlayer.defaultConfig; // {}
```

### Type

Remote player type.

Type: [string][248]

#### Examples

```javascript
BaseRemotePlayer.Type; // 'BaseRemotePlayer'
```

### isSupported

#### Examples

```javascript
BaseRemotePlayer.isSupported(); // true
```

Returns **[boolean][255]** Whether the remote player is supported in the current environment.

## CastEventType

Type: [Object][247]

### Examples

```javascript
// Events lifecycle
1. CAST_AVAILABLE
2. CAST_SESSION_STARTING
3. CAST_SESSION_STARTED || CAST_SESSION_START_FAILED -> X
4. CAST_SESSION_ENDING
5. CAST_SESSION_ENDED
```

```javascript
// How to use
player.addEventListener(KalturaPlayer.cast.CastEventType.CAST_SESSION_STARTED, e => {
  console.log(e.session);
};
```

## PlayerSnapshot

### Parameters

- `player` **KalturaPlayer** The Kaltura player.

### startTime

Type: [number][254]

### autoplay

Type: [boolean][255]

### audioLanguage

Type: [string][248]

### textLanguage

Type: [string][248]

### mediaInfo

Type: ProviderMediaInfoObject

### textStyle

Type: TextStyle

### advertising

Type: [Object][247]

### volume

Type: [number][254]

### muted

Type: [boolean][255]

## RemoteControl

### Parameters

- `player` **KalturaPlayer** The Kaltura player.

### getPlayerSnapshot

Gets the player snapshot.

Type: [Function][259]

Returns **[PlayerSnapshot][260]** player snapshot.

### getUIWrapper

Gets the UI wrapper.

Type: [Function][259]

Returns **UIWrapper** The UI wrapper.

### onRemoteDeviceDisconnected

On remote device disconnected handler.

Type: [Function][259]

#### Parameters

- `payload` **[RemoteDisconnectedPayload][261]** disconnected payload.

Returns **void**

### onRemoteDeviceConnected

On remote device connected handler.

Type: [Function][259]

#### Parameters

- `payload` **[RemoteConnectedPayload][262]** connected payload.

Returns **void**

### onRemoteDeviceAvailable

On remote device available handler.

Type: [Function][259]

#### Parameters

- `payload` **[RemoteAvailablePayload][263]** available payload.

Returns **void**

### onRemoteDeviceConnecting

On remote device connecting handler.

Type: [Function][259]

Returns **void**

### onRemoteDeviceDisconnecting

On remote device disconnecting handler.

Type: [Function][259]

Returns **void**

### onRemoteDeviceConnectFailed

On remote device connect failed handler.

Type: [Function][259]

Returns **void**

## RemotePayload

### Parameters

- `player` **[BaseRemotePlayer][264]** The active remote player.

### player

The active remote player.

Type: [BaseRemotePlayer][264]

Returns **[BaseRemotePlayer][264]**

## RemoteConnectedPayload

**Extends RemotePayload**

### Parameters

- `player` **[BaseRemotePlayer][264]** The active remote player.
- `session` **[RemoteSession][258]** The remote session.
- `ui` **[RemotePlayerUI][265]?** Optional remote player UI preset.

### ui

Remote player UI preset.

Type: [RemotePlayerUI][265]?

Returns **[RemotePlayerUI][265]?**

### session

Remote session.

Type: [RemoteSession][258]

Returns **[RemoteSession][258]?**

## RemoteDisconnectedPayload

**Extends RemotePayload**

### Parameters

- `player` **[BaseRemotePlayer][264]** The active remote player.
- `snapshot` **[PlayerSnapshot][260]** The remote player snapshot.

### snapshot

Remote player snapshot.

Type: [PlayerSnapshot][260]

Returns **[PlayerSnapshot][260]**

## RemoteAvailablePayload

**Extends RemotePayload**

### Parameters

- `player` **[BaseRemotePlayer][264]** The active remote player.
- `available` **[boolean][255]** Remote player availability.

### available

Remote player availability.

Type: [boolean][255]

Returns **[boolean][255]**

## RemotePlayerUI

### playbackUI

Playback UI of the remote player.

#### Parameters

- `props` **[Object][247]** UI creation parameters.

Returns **React$Element&lt;any>** Component.

### idleUI

Idle UI of the remote player.

#### Parameters

- `props` **[Object][247]** UI creation parameters.

Returns **React$Element&lt;any>** Component.

### adsUI

Idle UI of the remote player.

#### Parameters

- `props` **[Object][247]** UI creation parameters.

Returns **React$Element&lt;any>** Component.

### liveUI

Live UI of the remote player.

#### Parameters

- `props` **[Object][247]** UI creation parameters.

Returns **React$Element&lt;any>** Component.

### errorUI

Error UI of the remote player.

#### Parameters

- `props` **[Object][247]** UI creation parameters.

Returns **React$Element&lt;any>** Component.

### uis

UI presets.

Type: [Array][252]&lt;UIPreset>

Returns **[Array][252]&lt;UIPreset>**

## IRemotePlayer

### textStyle

Type: TextStyle

### muted

Type: [boolean][255]

### playbackRate

Type: [number][254]

### volume

Type: [number][254]

### currentTime

Type: [number][254]

### buffered

Type: [number][254]

### duration

Type: [number][254]

### paused

Type: [boolean][255]

### ended

Type: [boolean][255]

### seeking

Type: [boolean][255]

### src

Type: [string][248]

### poster

Type: [string][248]

### engineType

Type: [string][248]

### streamType

Type: [string][248]

### type

Type: [string][248]

### ads

Type: [Object][247]

### addEventListener

#### Parameters

- `type` **[string][248]**
- `listener` **[Function][259]**

### removeEventListener

#### Parameters

- `type` **[string][248]**
- `listener` **[Function][259]**

### dispatchEvent

#### Parameters

- `event` **FakeEvent**

### loadMedia

#### Parameters

- `mediaInfo` **[Object][247]**

### setMedia

#### Parameters

- `mediaConfig` **[Object][247]**

### getMediaInfo

Returns **[Object][247]**

### configure

#### Parameters

- `config` **[Object][247]**

### ready

Returns **[Promise][257]&lt;any>**

### load

### play

### pause

### reset

### destroy

### isLive

Returns **[boolean][255]**

### isDvr

Returns **[boolean][255]**

### seekToLiveEdge

### getStartTimeOfDvrWindow

Returns **[number][254]**

### getTracks

#### Parameters

- `type` **[string][248]?**

Returns **[Array][252]&lt;Track>**

### getActiveTracks

Returns **[Object][247]**

### selectTrack

#### Parameters

- `track` **Track**

### hideTextTrack

### enableAdaptiveBitrate

### isAdaptiveBitrateEnabled

Returns **[boolean][255]**

### setTextDisplaySettings

#### Parameters

- `settings` **[Object][247]**

### startCasting

### stopCasting

### isCasting

Returns **[boolean][255]**

### isCastAvailable

Returns **[boolean][255]**

### getCastSession

Returns **[RemoteSession][258]**

### isVr

Returns **[boolean][255]**

### toggleVrStereoMode

### isInVrStereoMode

Returns **[boolean][255]**

### Type

Type: [string][248]

### isSupported

Returns **[boolean][255]**

## RemoteSession

### Parameters

- `id` **[string][248]** Session ID.
- `friendlyName` **[string][248]** Receiver friendly name.
- `resuming` **[boolean][255]?** Whether the session is resuming.

### deviceFriendlyName

Receiver friendly name.

Type: [string][248]

Returns **[string][248]**

### id

Session ID.

Type: [string][248]

Returns **[string][248]**

### resuming

Whether the session is resuming.

Type: [boolean][255]?

Returns **[boolean][255]?**

## PlaylistEventType

Type: [Object][247]

### Examples

```javascript
// Events lifecycle
1. PLAYLIST_LOADED
2. PLAYLIST_ITEM_CHANGED (multiple)
3. PLAYLIST_ENDED
```

```javascript
// How to use
player.addEventListener(KalturaPlayer.playlist.PlaylistEventType.PLAYLIST_LOADED, e => {
  console.log(e.payload.playlist.metadata.name);
};
```

## PlaylistItem

### Parameters

- `sources` **ProviderMediaConfigSourcesObject?** The item sources
- `config` **[KPPlaylistItemConfigObject][266]?** The item config

### sources

Playlist item sources

Type: ProviderMediaConfigSourcesObject?

Returns **ProviderMediaConfigSourcesObject?**

### config

Playlist item config

Type: [KPPlaylistItemConfigObject][266]?

Returns **[KPPlaylistItemConfigObject][266]?**

### isPlayable

Returns **[boolean][255]** = Whether the playlist item has sources to play

## PlaylistManager

### Parameters

- `player` **KalturaPlayer** The player instance
- `options` **KPOptionsObject** The player config object

### playNext

Play the next item

Returns **void**

### playPrev

Play the previous item

Returns **void**

### playItem

Play a specific item

#### Parameters

- `index` **[number][254]** The index of the item to play

Returns **void**

### items

Playlist items

Type: [Array][252]&lt;[PlaylistItem][253]>

Returns **[Array][252]&lt;[PlaylistItem][253]>**

### next

Next item

Type: [PlaylistItem][253]?

Returns **[PlaylistItem][253]?**

### prev

Previous item

Type: [PlaylistItem][253]?

Returns **[PlaylistItem][253]?**

### id

Playlist id

Type: [string][248]

Returns **[string][248]**

### metadata

Playlist metadata

Type: [KPPlaylistMetadata][249]

Returns **[KPPlaylistMetadata][249]**

### countdown

Playlist countdown

Type: [KPPlaylistCountdownOptions][251]

Returns **[KPPlaylistCountdownOptions][251]**

### options

Playlist options

Type: [KPPlaylistOptions][250]

Returns **[KPPlaylistOptions][250]**

## getPlayers

get all instantiated players

Returns **[KalturaPlayers][267]** map of player ids and their respective instantiated player

## getPlayer

get a player instance by id

### Parameters

- `id` **[string][248]** the player ID

Returns **(KalturaPlayer | null)** the player if found by the supplied ID or null if key doesn't exist

[1]: #kalturaplayers
[2]: #kpplaylistconfigobject
[3]: #parameters
[4]: #kpplaylistcountdownoptions
[5]: #parameters-1
[6]: #kpplaylistitemconfigobject
[7]: #properties
[8]: #kpplaylistmetadata
[9]: #properties-1
[10]: #kpplaylistoptions
[11]: #properties-2
[12]: #baseremoteplayer
[13]: #parameters-2
[14]: #loadmedia
[15]: #parameters-3
[16]: #setmedia
[17]: #parameters-4
[18]: #getmediainfo
[19]: #configure
[20]: #parameters-5
[21]: #ready
[22]: #load
[23]: #play
[24]: #pause
[25]: #reset
[26]: #destroy
[27]: #islive
[28]: #examples
[29]: #isdvr
[30]: #examples-1
[31]: #seektoliveedge
[32]: #getstarttimeofdvrwindow
[33]: #examples-2
[34]: #gettracks
[35]: #parameters-6
[36]: #examples-3
[37]: #getactivetracks
[38]: #examples-4
[39]: #selecttrack
[40]: #parameters-7
[41]: #hidetexttrack
[42]: #enableadaptivebitrate
[43]: #isadaptivebitrateenabled
[44]: #examples-5
[45]: #settextdisplaysettings
[46]: #parameters-8
[47]: #startcasting
[48]: #stopcasting
[49]: #iscasting
[50]: #examples-6
[51]: #iscastavailable
[52]: #examples-7
[53]: #getcastsession
[54]: #examples-8
[55]: #isvr
[56]: #examples-9
[57]: #togglevrstereomode
[58]: #isinvrstereomode
[59]: #examples-10
[60]: #ads
[61]: #examples-11
[62]: #textstyle
[63]: #parameters-9
[64]: #textstyle-1
[65]: #examples-12
[66]: #buffered
[67]: #examples-13
[68]: #currenttime
[69]: #parameters-10
[70]: #currenttime-1
[71]: #examples-14
[72]: #duration
[73]: #examples-15
[74]: #volume
[75]: #parameters-11
[76]: #volume-1
[77]: #examples-16
[78]: #paused
[79]: #examples-17
[80]: #ended
[81]: #examples-18
[82]: #seeking
[83]: #examples-19
[84]: #muted
[85]: #parameters-12
[86]: #muted-1
[87]: #examples-20
[88]: #src
[89]: #examples-21
[90]: #poster
[91]: #examples-22
[92]: #playbackrate
[93]: #parameters-13
[94]: #playbackrate-1
[95]: #examples-23
[96]: #enginetype
[97]: #examples-24
[98]: #streamtype
[99]: #examples-25
[100]: #type
[101]: #examples-26
[102]: #defaultconfig
[103]: #examples-27
[104]: #type-1
[105]: #examples-28
[106]: #issupported
[107]: #examples-29
[108]: #casteventtype
[109]: #examples-30
[110]: #playersnapshot
[111]: #parameters-14
[112]: #starttime
[113]: #autoplay
[114]: #audiolanguage
[115]: #textlanguage
[116]: #mediainfo
[117]: #textstyle-2
[118]: #advertising
[119]: #volume-2
[120]: #muted-2
[121]: #remotecontrol
[122]: #parameters-15
[123]: #getplayersnapshot
[124]: #getuiwrapper
[125]: #onremotedevicedisconnected
[126]: #parameters-16
[127]: #onremotedeviceconnected
[128]: #parameters-17
[129]: #onremotedeviceavailable
[130]: #parameters-18
[131]: #onremotedeviceconnecting
[132]: #onremotedevicedisconnecting
[133]: #onremotedeviceconnectfailed
[134]: #remotepayload
[135]: #parameters-19
[136]: #player
[137]: #remoteconnectedpayload
[138]: #parameters-20
[139]: #ui
[140]: #session
[141]: #remotedisconnectedpayload
[142]: #parameters-21
[143]: #snapshot
[144]: #remoteavailablepayload
[145]: #parameters-22
[146]: #available
[147]: #remoteplayerui
[148]: #playbackui
[149]: #parameters-23
[150]: #idleui
[151]: #parameters-24
[152]: #adsui
[153]: #parameters-25
[154]: #liveui
[155]: #parameters-26
[156]: #errorui
[157]: #parameters-27
[158]: #uis
[159]: #iremoteplayer
[160]: #textstyle-3
[161]: #muted-3
[162]: #playbackrate-2
[163]: #volume-3
[164]: #currenttime-2
[165]: #buffered-1
[166]: #duration-1
[167]: #paused-1
[168]: #ended-1
[169]: #seeking-1
[170]: #src-1
[171]: #poster-1
[172]: #enginetype-1
[173]: #streamtype-1
[174]: #type-2
[175]: #ads-1
[176]: #addeventlistener
[177]: #parameters-28
[178]: #removeeventlistener
[179]: #parameters-29
[180]: #dispatchevent
[181]: #parameters-30
[182]: #loadmedia-1
[183]: #parameters-31
[184]: #setmedia-1
[185]: #parameters-32
[186]: #getmediainfo-1
[187]: #configure-1
[188]: #parameters-33
[189]: #ready-1
[190]: #load-1
[191]: #play-1
[192]: #pause-1
[193]: #reset-1
[194]: #destroy-1
[195]: #islive-1
[196]: #isdvr-1
[197]: #seektoliveedge-1
[198]: #getstarttimeofdvrwindow-1
[199]: #gettracks-1
[200]: #parameters-34
[201]: #getactivetracks-1
[202]: #selecttrack-1
[203]: #parameters-35
[204]: #hidetexttrack-1
[205]: #enableadaptivebitrate-1
[206]: #isadaptivebitrateenabled-1
[207]: #settextdisplaysettings-1
[208]: #parameters-36
[209]: #startcasting-1
[210]: #stopcasting-1
[211]: #iscasting-1
[212]: #iscastavailable-1
[213]: #getcastsession-1
[214]: #isvr-1
[215]: #togglevrstereomode-1
[216]: #isinvrstereomode-1
[217]: #type-3
[218]: #issupported-1
[219]: #remotesession
[220]: #parameters-37
[221]: #devicefriendlyname
[222]: #id
[223]: #resuming
[224]: #playlisteventtype
[225]: #examples-31
[226]: #playlistitem
[227]: #parameters-38
[228]: #sources
[229]: #config
[230]: #isplayable
[231]: #playlistmanager
[232]: #parameters-39
[233]: #playnext
[234]: #playprev
[235]: #playitem
[236]: #parameters-40
[237]: #items
[238]: #next
[239]: #prev
[240]: #id-1
[241]: #metadata
[242]: #countdown
[243]: #options
[244]: #getplayers
[245]: #getplayer
[246]: #parameters-41
[247]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
[248]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
[249]: #kpplaylistmetadata
[250]: #kpplaylistoptions
[251]: #kpplaylistcountdownoptions
[252]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
[253]: #playlistitem
[254]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number
[255]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[256]: #remotecontrol
[257]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise
[258]: #remotesession
[259]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function
[260]: #playersnapshot
[261]: #remotedisconnectedpayload
[262]: #remoteconnectedpayload
[263]: #remoteavailablepayload
[264]: #baseremoteplayer
[265]: #remoteplayerui
[266]: #kpplaylistitemconfigobject
[267]: #kalturaplayers
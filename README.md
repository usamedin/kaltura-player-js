# Massive Fork of Kaltura Player

The Kaltura Player is forked and modified for porpose of **Mediacorp** project Toggle.

## Original repo https://github.com/kaltura/kaltura-player-js

## Modifications

- Excluded packages to reduce the size - Kaltura UI - Shaka - Dash - Cast
- Removed player logs

## Installing

```
yarn add https://github.com/usamedin/kaltura-player-js
```

## Development

```
git clone https://github.com/usamedin/kaltura-player-js
yarn install
yarn dev:ovp
```

Open http://localhost:8080

## Building

```
yarn run build:ovp
```

The build is created in **./dist/kaltura-ovp-player.js**

### The project is using **massive** branch build

Author: Medin usamedin.nuhiji@massive.co

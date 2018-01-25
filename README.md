# Flow app

App runs on `9898` port.

## Building

- `$ npm install -g electron-packager`
- `$ cd flowapp`
- `$ npm install`
- __macOS__ `$ electron-packager . Flow --overwrite --icon icon.icns`
- __Linux__ `$ electron-packager . Flow --overwrite --icon icon.png`
- __Windows__ `$ electron-packager . Flow --overwrite --icon icon.ico`

## How do I run it without building?

- `$ npm install`
- `$ npm start`

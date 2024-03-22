const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const windowStateKeeper = require('electron-window-state');
const path = require('path');

let mainWindow;

module.paths.push(path.resolve('node_modules'));
module.paths.push(path.resolve('../node_modules'));
module.paths.push(path.resolve(__dirname, '..', '..', '..', '..', 'resources', 'app', 'node_modules'));
module.paths.push(path.resolve(__dirname, '..', '..', '..', '..', 'resources', 'app.asar', 'node_modules'));

function createWindow () {
	var mainWindowState = windowStateKeeper({ defaultWidth: 1280, defaultHeight: 768 });
	mainWindow = new BrowserWindow({ icon: __dirname + '/icon.png', x: mainWindowState.x, y: mainWindowState.y, width: mainWindowState.width, height: mainWindowState.height, webPreferences: { nodeIntegration: false }});
	mainWindow.on('closed', function () {
		mainWindow = null;
	});
	mainWindowState.manage(mainWindow);
	if (global.Total === undefined)
		require('total5');

	Total.run({ release: true, port: 9898 });
	ON('ready', () => setTimeout(() => mainWindow.loadURL('http://127.0.0.1:9898/'), 1000);
}

app.on('ready', createWindow);
app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit());
app.on('activate', () => mainWindow === null && createWindow());
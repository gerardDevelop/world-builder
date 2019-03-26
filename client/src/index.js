import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as Phaser from 'phaser';

import MainScene from './Phaser/Scenes/MainScene';

//import NetworkClient from './Networking/NetworkClient';
//import CharacterManager from './managers/CharacterManager';

window.main = new Phaser.Game(
  {
    type: Phaser.WEBGL,
    pixelArt: true,
    //roundPixels: true,
    parent: 'phaser-content',
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade'
    },
    scene: [
        MainScene
    ]
});

// window.networkClient = new NetworkClient();
// window.charManager = new CharacterManager();

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement);

/*
ReactDOM.render(
  <App />
);
*/

registerServiceWorker();

var keyBindings = {
  moveUp: 87,
	moveLeft: 65,
	moveDown: 83,
	moveRight: 68,
};
window.keyBindings = keyBindings;

var keysDown = {};
window.keysDown = keysDown;

const handleKeyDown = e => {
  console.log("on key down");
  
  keysDown[e.which] = true;
};

const handleKeyUp = e => {
  console.log("on key up");

  keysDown[e.which] = false;
};

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);
/*
window.addEventListener('resize', () => {
  console.log("calling resize");
  //dwmain.resize(window.innerWidth, window.innerHeight);
  window.mainScene.resize(window.innerWidth, window.innerHeight);
});
*/
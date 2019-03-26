import * as Phaser from 'phaser';

class Character {
  constructor(mainScene, charName, x, y) {
    this.sprite = mainScene.add.sprite(1,1, 'warrior');
  }

  update(deltaTime) {
    
  }

  setX(x) {
    this.sprite.x = x;
  }

  setY(y) {
    this.sprite.y = y;
  }

  getX() {
    return this.sprite.x;
  }

  getY() {
    return this.sprite.y;
  }
}

export default Character;
import Player from './Player';

class MyPlayer {
  constructor(player) {
    this.player = player;

    this.oldX = null;
    this.oldY = null;
  }

  isInDifferentPosition() {
    return this.oldX !== this.player.sprite.x &&
      this.oldY !== this.player.sprite.y;
  }

  setOldPos(x, y) {
    this.oldX = x;
    this.oldY = y;
  }

  update(delta) {

  }
}

export default MyPlayer;
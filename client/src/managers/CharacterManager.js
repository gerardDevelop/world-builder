import Character from '../models/Character';

class CharManager {
  constructor() {
    this.myChar = null;

    this.chars = {};
  }

  addChar(charName, x, y) {
    const newChar = new Character(charName, x, y);

    // store this character inside a js object
    this.characters[charName] = newChar;
  }
}

export default CharManager;
import * as Phaser from 'phaser';
import Player from '../../models/Player';
import MyPlayer from '../../models/MyPlayer';

class MainScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainScene'
        });

        window.mainScene = this;
        
        this.posSendTimer = 0;

        this.characters = {}; // should contain refs to all nearby user controlled characters
        
        this.myCharacter = null;
        
        this.NPCs = {}; // should contain refs to all nearby npcs
        
        this.projectiles = {};
    }

    // todo: clean this all up

    preload() {

        this.load.image(
            "tiles",
            "../assets/tilesets/tiles-extruded-name.png"
        );

        this.load.tilemapTiledJSON(
            "map",
            "../assets/tilemaps/tilemapname.json"
        );


        this.load.spritesheet('warrior', 'assets/sprites/warrior_test.png',
            { frameWidth: 32, frameHeight: 32 });
        /*
        this.load.scenePlugin('animatedTiles', AnimatedTiles, 'animatedTiles', 'animatedTiles');
        */
       console.log("in mainscene");
    }

    resize(width, height) {
        if (width === undefined) { width = this.sys.game.config.width; }
        if (height === undefined) { height = this.sys.game.config.height; }

        this.cameras.resize(width, height);
        console.log("resized!");
        //this.cameras.main.setViewport(0, 0, width, height);
    }

    create() {
      /*
      const camera = this.cameras.main;
      
      //camera.setZoom();

      // Set up the arrows to control the camera
      const cursors = this.input.keyboard.createCursorKeys();
      this.controls = new Phaser.Cameras.Controls.FixedKeyControl({
        camera: camera,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        speed: 0.75
      });
      */
      /*
     const map = this.make.tilemap({ key: "map" });

     const tiles = map.addTilesetImage(
     "0x72-industrial-tileset-32px-extruded",
     "tiles"

     map.createDynamicLayer("Background", tiles);
     this.groundLayer = map.createDynamicLayer("Ground", tiles);
     map.createDynamicLayer("Foreground", tiles);
     */
    //);
      
      this.mainSprite = this.add.sprite(1, 1, 'warrior');
      
      var newPlayer = new Player(this);
      this.myPlayer = new MyPlayer(newPlayer);

      console.log("created mainScene");
    }

    addNewPlayer() {
        
    }

    update(time, delta) {
        //console.log("delta: " + delta);

        delta /= 1000;

        if(window.keysDown[window.keyBindings.moveUp]) {
            this.myPlayer.player.sprite.y -= 100 *delta;
        } 
        if(window.keysDown[window.keyBindings.moveDown]) {
            this.myPlayer.player.sprite.y += 100 *delta;
        }
        if(window.keysDown[window.keyBindings.moveLeft]) { 
            this.myPlayer.player.sprite.x -= 100 *delta;
        } 
        if(window.keysDown[window.keyBindings.moveRight]) {
            this.myPlayer.player.sprite.x += 100 *delta;
        }
        
        // after input is resolved, send info about new player's position to the server
        this.posSendTimer += delta;

        if(this.posSendTimer > 0.1) {
            if(this.myPlayer.isInDifferentPosition()) {
                
                //broadcast new pos here
                window.networkClient.sendPositionUpdate(this.myPlayer.player.sprite.x,
                    this.myPlayer.player.sprite.y);

                this.myPlayer.setOldPos(this.myPlayer.player.sprite.x,
                    this.myPlayer.player.sprite.y);

                this.posSendTimer = 0;
            }
        } 

        // todo - make a more manual camera follow solution, however for now, this is fine
        this.cameras.main.startFollow(this.myPlayer.player.sprite);
    }
}

export default MainScene;
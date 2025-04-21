class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        my.sprite.eye1 = this.add.sprite(
            this.bodyX - 30,
            this.bodyY - 60,
            "monsterParts",
            "eye_blue.png"
        );
        my.sprite.eye2 = this.add.sprite(
            this.bodyX + 30,
            this.bodyY - 60,
            "monsterParts",
            "eye_angry_red.png"
        );

        my.sprite.nose = this.add.sprite(
            this.bodyX,
            this.bodyY,
            "monsterParts",
            "nose_green.png"
        );

        my.sprite.armL = this.add.sprite(
            this.bodyX - 80,
            this.bodyY + 20,
            "monsterParts",
            "arm_greenD.png"
        );
        my.sprite.armR = this.add.sprite(
            this.bodyX + 80,
            this.bodyY + 20,
            "monsterParts",
            "arm_greenD.png"
        );
        my.sprite.armR.flipX = true;

        my.sprite.legL = this.add.sprite(
            this.bodyX - 40,
            this.bodyY + 110,
            "monsterParts",
            "leg_greenD.png"
        );
        my.sprite.legR = this.add.sprite(
            this.bodyX + 40,
            this.bodyY + 110,
            "monsterParts",
            "leg_greenD.png"
        );
        my.sprite.legR.flipX = true;

        my.sprite.antennaL = this.add.sprite(
            this.bodyX - 20,
            this.bodyY - 100,
            "monsterParts",
            "detail_green_antenna_large.png"
        );
        my.sprite.antennaS = this.add.sprite(
            this.bodyX + 20,
            this.bodyY - 100,
            "monsterParts",
            "detail_green_antenna_small.png"
        );

        my.sprite.smile = this.add.sprite(
            this.bodyX,
            this.bodyY + 40,
            "monsterParts",
            "mouth_closed_happy.png"
        );
        my.sprite.fangs = this.add.sprite(
            this.bodyX,
            this.bodyY + 40,
            "monsterParts",
            "mouth_closed_fangs.png"
        );
        my.sprite.smile.setVisible(true);
        my.sprite.fangs.setVisible(false);

        this.children.bringToTop([
            my.sprite.antennaL,
            my.sprite.antennaS,
            my.sprite.eye1,
            my.sprite.eye2,
            my.sprite.nose,
            my.sprite.smile,
            my.sprite.fangs,
            my.sprite.armL,
            my.sprite.armR,
            my.sprite.legL,
            my.sprite.legR
        ]);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (Phaser.Input.Keyboard.JustDown(this.keyS)) {
            my.sprite.smile.setVisible(true);
            my.sprite.fangs.setVisible(false);
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyF)) {
            my.sprite.smile.setVisible(false);
            my.sprite.fangs.setVisible(true);
        }

        if (this.keyA.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x -= 1;
            }
        } else if (this.keyD.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x += 1;
            }
        }
    }
}


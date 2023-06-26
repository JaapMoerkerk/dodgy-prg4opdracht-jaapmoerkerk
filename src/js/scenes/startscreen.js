import {Actor, Color, Font, FontUnit, Input, Label, Physics, Scene, Sprite, Vector} from "excalibur";
import {Background} from "../classes/background.js";
import {Player} from "../classes/player.js";
import {Settings} from "../settings.js";
import {Resources} from "../resources.js";

export class Startscreen extends Scene {
    game

    constructor() {
        super();
    }

    onInitialize(engine) {
        Physics.gravity = new Vector(0, Settings.gravityStrength)
        const backgroundSky = new Background("BackgroundSky", 0);
        const backgroundClouds = new Background("BackgroundClouds", 0);
        const backgroundMountains = new Background("BackgroundMountains", 0);
        const background3 = new Background("Background3", 0);
        const background2 = new Background("Background2", 0);
        const background1 = new Background("Background1", 0);
        this.add(backgroundSky)
        this.add(backgroundClouds)
        this.add(backgroundMountains)
        this.add(background3)
        this.add(background2)
        this.add(background1)

        //Logo
        const logo = new Actor({
            x: Settings.screenWidth/2,
            y: Settings.screenHeight/2,
            anchor: new Vector(0.2, 0.5)
        })
        logo.scale.scaleEqual(0.4)
        logo.graphics.use(Resources.Logo.toSprite())
        this.add(logo)

        //Press space to continue
        const pressText = new Label({
            text: "PRESS SPACE TO CONTINUE",
            pos: new Vector(400, Settings.screenHeight - 100),
            anchor: new Vector(0.5, 0.5),
            font: new Font({
                family: 'impact',
                color: Color.Azure,
                size: 100,
                unit: FontUnit.Px
            })
        })
        this.add(pressText)

        //Add player here
        const player = new Player()
        player.disableJump = true;
        this.add(player)
        player.graphics.use("idle")


    }

        onPreUpdate(_engine, _delta)
        {
            if (this.engine.input.keyboard.wasPressed(Input.Keys.Space)) {
                this.engine.goToScene('level1')
            }
        }
}
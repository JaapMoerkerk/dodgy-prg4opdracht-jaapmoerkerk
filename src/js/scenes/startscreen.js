import {Input, Physics, Scene, Vector} from "excalibur";
import {Background} from "../classes/background.js";
import {Player} from "../classes/player.js";
import {Settings} from "../settings.js";

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
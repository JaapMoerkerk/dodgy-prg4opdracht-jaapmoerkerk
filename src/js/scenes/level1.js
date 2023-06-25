import {Scene} from "excalibur";
import {Background} from "../classes/background.js";
import {Player} from "../classes/player.js";
import {Spawner} from "../classes/spawner.js";

export class Level1 extends Scene {
    game

    constructor() {
        super();
    }

    onInitialize(engine) {
        this.game = engine
    }

    onActivate() {
        const backgroundSky = new Background("BackgroundSky", 0);
        const backgroundClouds = new Background("BackgroundClouds", 20);
        const backgroundMountains = new Background("BackgroundMountains", 40);
        const background3 = new Background("Background3", 200);
        const background2 = new Background("Background2", 250);
        const background1 = new Background("Background1", 350);
        this.add(backgroundSky)
        this.add(backgroundClouds)
        this.add(backgroundMountains)
        this.add(background3)
        this.add(background2)
        this.add(background1)

        const player = new Player()
        player.disableJump = false;
        player.graphics.use('fly')
        this.add(player)

        const spawner = new Spawner()
        this.add(spawner)
    }
}
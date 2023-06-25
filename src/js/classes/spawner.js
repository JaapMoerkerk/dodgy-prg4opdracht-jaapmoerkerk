import {Actor, Random, Timer} from "excalibur";
import {Redbird} from "./redbird.js";
import {Enemy} from "./enemy.js";
import {Settings} from "../settings.js";
import {Bluebird} from "./bluebird.js";

export class Spawner extends Actor {

    constructor() {
        super()
        this.random = new Random(5995)
    }

    onInitialize(engine) {
        this.timer = new Timer({
            fcn: () => this.spawn(engine),
            interval: 1000,
            repeats: true
        })
        engine.currentScene.add(this.timer)
        this.timer.start()
    }

    spawn(engine) {
        let redOrBlue = this.random.integer(0, 1)
        if (redOrBlue === 0) {
            const enemy = new Redbird(
                this.random.integer(0, Settings.screenHeight/2)
            )

            engine.currentScene.add(enemy)
        }else {
            const enemy = new Bluebird(
                this.random.integer(Settings.screenHeight/2 - 200, Settings.screenHeight - 100)
            )
            engine.currentScene.add(enemy)
        }
    }
}
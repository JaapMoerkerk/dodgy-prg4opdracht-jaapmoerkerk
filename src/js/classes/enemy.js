import {Actor, Vector} from "excalibur";
import {Settings} from "../settings.js";

export class Enemy extends Actor {
    constructor() {
        super({
            width: 700,
            height: 500
        })
        this.pos.x = Settings.screenWidth * 2
        this.vel = new Vector(-Settings.enemySpeed, 0)
    }
}

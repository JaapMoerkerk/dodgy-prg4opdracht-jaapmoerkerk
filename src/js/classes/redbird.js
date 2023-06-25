import {Enemy} from "./enemy.js";
import {Animation, range, SpriteSheet} from "excalibur";
import {Resources} from "../resources.js";

export class Redbird extends Enemy{
    constructor(enemyHeight) {
        super()
        const redbirdSheet = SpriteSheet.fromImageSource({
            image: Resources.Redbird,
            grid: {
                rows: 1,
                columns: 2,
                spriteWidth: 702,
                spriteHeight: 510
            }
        })
        const redbird = Animation.fromSpriteSheet(redbirdSheet, range(0,1), 100)
        redbird.flipHorizontal = true
        this.graphics.add('redbird', redbird)
        this.scale.scaleEqual(0.16)
        this.pos.y = enemyHeight
    }

    onInitialize(engine) {
        this.graphics.use('redbird')
    }
}
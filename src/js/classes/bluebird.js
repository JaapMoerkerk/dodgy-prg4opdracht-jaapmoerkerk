import {Enemy} from "./enemy.js";
import {Animation, range, SpriteSheet} from "excalibur";
import {Resources} from "../resources.js";

export class Bluebird extends Enemy{
    constructor(enemyHeight) {
        super()
        const bluebirdSheet = SpriteSheet.fromImageSource({
            image: Resources.Bluebird,
            grid: {
                rows: 2,
                columns: 2,
                spriteWidth: 709,
                spriteHeight: 599
            }
        })
        const bluebird = Animation.fromSpriteSheet(bluebirdSheet, range(0,1), 100)
        bluebird.flipHorizontal = true
        this.graphics.add('bluebird', bluebird)
        this.scale.scaleEqual(0.16)
        this.pos.y = enemyHeight
    }

    onInitialize(engine) {
        this.graphics.use('bluebird')
    }
}

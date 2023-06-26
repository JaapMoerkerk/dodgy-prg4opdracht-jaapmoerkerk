import {Actor, Animation, clamp, CollisionType, Input, Physics, range, SpriteSheet, Vector} from "excalibur";
import {ResourceLoader, Resources} from "../resources.js";
import {Settings} from "../settings.js";
import {Redbird} from "./redbird.js";
import {Bluebird} from "./bluebird.js";

export class Player extends Actor {
    constructor() {
        super({
            width: 1100, height: 800, anchor: new Vector(0.5, 0.3)
        });
        const flySheet = SpriteSheet.fromImageSource({
            image: Resources.Player,
            grid: {
                rows: 2,
                columns: 4,
                spriteHeight: 1224,
                spriteWidth: 1258
            }
        })

        const hitSheet = SpriteSheet.fromImageSource({
            image: Resources.PlayerHit,
            grid: {
                rows: 1,
                columns: 2,
                spriteHeight: 1224,
                spriteWidth: 1258
            }
        })

        const idle = Animation.fromSpriteSheet(flySheet, range(0, 7), 150)
        const fly = Animation.fromSpriteSheet(flySheet, range(0, 7), 50)
        const hit = Animation.fromSpriteSheet(hitSheet, range(0, 1), 200)

        this.graphics.add("idle", idle)
        this.graphics.add("fly", fly)
        this.graphics.add("hit", hit)

        this.scale.scaleEqual(0.16)

        this.body.collisionType = CollisionType.Active
        this.body.useGravity = false

        this.disableJump = false

    }

    onInitialize(engine) {
        this.game = engine
        this.pos = new Vector(Settings.playerX, Settings.playerY)
        this.vel = new Vector(0, 0)

        this.on('collisionstart', (event) => this.collisionHandler(event))
    }


    onPreUpdate(engine, delta) {
        if (!this.disableJump) {
            if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
                this.body.useGravity = true
                this.jump()
            }
            this.pos.x = clamp(this.pos.x, this.width / 2, engine.drawWidth - this.width / 2);
            this.pos.y = clamp(this.pos.y, this.height / 2, engine.drawHeight - this.height / 2);
        }
    }

    jump() {
        this.vel = new Vector(0, -1000)
    }

    collisionHandler(event) {
        if (event.other instanceof Redbird || (event.other instanceof Bluebird)) {
            this.graphics.use("hit")
            this.disableJump = true
            Physics.gravity.y = 800
            setTimeout(this.gameOver, 2500)
        }
    }

    gameOver = () => {
        this.game.goToScene('gameover')
    }
}

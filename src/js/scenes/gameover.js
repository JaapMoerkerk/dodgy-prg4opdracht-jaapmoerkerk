import {Color, Font, FontUnit, Label, Scene, Vector} from "excalibur";
import {Settings} from "../settings.js";
import {Game} from "../game.js";
import {Startscreen} from "./startscreen.js";
import {Level1} from "./level1.js";

export class Gameover extends Scene {
    constructor() {
        super()
    }

    onInitialize(engine) {
    const gameoverText = new Label({
            text: "GAME OVER",
            pos: new Vector(0, Settings.screenHeight/2),
            font: new Font({
                family: 'impact',
                color: Color.Red,
                size: 200,
                unit: FontUnit.Px
            })
        })
        console.log(gameoverText.localCenter)
        gameoverText.pos.x = (Settings.screenWidth/2) - 450
        this.add(gameoverText)
        setTimeout(this.resetGame, 2000)
    }


    resetGame = () => {
        window.location.reload()
    }

}
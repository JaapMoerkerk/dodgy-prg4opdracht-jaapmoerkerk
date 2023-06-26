import '../css/style.css'
import {DisplayMode, Engine} from "excalibur"
import {ResourceLoader} from './resources.js'
import './classes/collision.js'
import {Startscreen} from "./scenes/startscreen.js";
import {Level1} from "./scenes/level1.js";
import {Settings} from "./settings.js";
import {Gameover} from "./scenes/gameover.js";

export class Game extends Engine {

    constructor() {
        ResourceLoader.suppressPlayButton = true
        super({
            width: Settings.screenWidth,
            height: Settings.screenHeight,
            displayMode: DisplayMode.FillScreen,
        })
        this.start(ResourceLoader).then(() => this.loadStartScreen())
        this.showDebug(true)
    }

    loadStartScreen() {
        this.add('startscreen', new Startscreen())
        this.add('level1', new Level1())
        this.add('gameover', new Gameover())
        this.goToScene('startscreen')
    }
}

new Game()
import {ImageSource, Loader} from 'excalibur'
import backgroundSky from '../images/background/sky_6_big.png'
import backgroundClouds from '../images/background/clouds_5_big.png'
import backgroundMountains from '../images/background/mountains_4_big.png'
import background1 from '../images/background/clouds_mg_1_big.png'
import background2 from '../images/background/clouds_mg_2_big.png'
import background3 from '../images/background/clouds_mg_3_big.png'
import player from '../images/player/player_spritesheet.png'
import playerhit from '../images/player/hit_spritesheet.png'
import logo from '../images/logo.png'
import redbird from '../images/enemies/redbird.png'
import bluebird from '../images/enemies/bluebird.png'

const Resources = {
    BackgroundSky: new ImageSource(backgroundSky),
    BackgroundClouds: new ImageSource(backgroundClouds),
    BackgroundMountains: new ImageSource(backgroundMountains),
    Background3: new ImageSource(background3),
    Background2: new ImageSource(background2),
    Background1: new ImageSource(background1),

    Player: new ImageSource(player),
    PlayerHit: new ImageSource(playerhit),
    Redbird: new ImageSource(redbird),
    Bluebird: new ImageSource(bluebird),
    Logo: new ImageSource(logo)
}

const ResourceLoader = new Loader([
    Resources.BackgroundSky, Resources.BackgroundMountains,
    Resources.BackgroundClouds, Resources.Background3,
    Resources.Background2, Resources.Background1,
    Resources.Player, Resources.PlayerHit, Resources.Logo,
    Resources.Redbird, Resources.Bluebird
])

export { Resources, ResourceLoader }
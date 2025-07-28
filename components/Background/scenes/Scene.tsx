import { Scene as SceneThree } from "three"
import Camara from "../clases/Camara"
import Luces from "../clases/Luces"
import Skybox from "../clases/Skybox"
import Logo from "../clases/pokemon/Logo"
import Loader from "../clases/Loader"
import Pokeball from "../clases/pokemon/Pokeball"
import entei from "../clases/pokemon/entei"
import groudon from "../clases/pokemon/groudon"
import charizard from "../clases/pokemon/charizard"
import lapras from "../clases/pokemon/lapras"
import hierba from "../clases/pokemon/hierba"

export default class Scene extends SceneThree {

    private camara: Camara

    constructor(renderer) {
        super()
        const loader = new Loader()
        this.camara = new Camara()
        new Luces(this)
        new Skybox(this)
        new Logo(this, loader)
        new Pokeball(this, loader)
        new entei(this, loader)
        new groudon(this, loader)
        new charizard(this, loader)
        
        new lapras(this, loader)
        new hierba(this,loader)
        this.update(renderer)
    }

    private update(renderer) {
        renderer.render(this, this.camara)
        requestAnimationFrame(this.update.bind(this, renderer))
    }
}
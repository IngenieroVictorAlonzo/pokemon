import { WebGLRenderer } from "three";
import Scene from "./scenes/Scene";

export default class Renderer extends WebGLRenderer {

    constructor() {
        super({
            antialias: true,
            canvas: document.getElementById("bg")
        })

        //console.log("¿Es WebGL?", this.isWebGLRenderer)

        this.config()

        new Scene(this)
    }

    private config() {

        this.setSize(window.innerWidth, window.innerHeight)
        window.addEventListener("resize", this.resize)
    }

    private resize() {
        window.location.reload()
    }
}
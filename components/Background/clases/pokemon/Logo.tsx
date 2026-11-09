import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default class Logo {

    private object: Group
    private contador = 0

    constructor(scene, loader: GLTFLoader) {
        loader.load("/logo.glb", (gltf) => {
            this.object = gltf.scene
            this.posicionar()

            scene.add(this.object)
        })
        this.update()
    }

    private posicionar() {
        this.object.translateZ(-10)
        if (window.innerWidth > 900) {
            const ratio = (window.innerWidth - 900) * 3.2 / 460 + 5.6
            this.object.translateY(4)
            this.object.translateX(ratio)
        } else {
            this.object.translateY(7)
        }
    }

    private update() {
        this.contador += 0.03
        if (this.object) this.object.rotation.y = Math.sin(this.contador) / 5
        console.log()
        requestAnimationFrame(this.update.bind(this))
    }
}
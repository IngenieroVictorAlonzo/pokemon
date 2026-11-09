import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default class lapras {

    private object: Group
    private contador = 0

    constructor(scene, loader: GLTFLoader) {
        loader.load("/lapras.glb", (gltf) => {
            this.object = gltf.scene
            this.posicionar()
            scene.add(this.object)
        })
        this.update()
    }

    private posicionar() {

        if (window.innerWidth > 900) {
            const ratio = (window.innerWidth - 900) * -1 / 460 + 0.4
            this.object.translateZ(36.6)
            this.object.translateY(0.5)
            this.object.translateX(ratio)


        } else {
            this.object.translateZ(38.5)
            this.object.translateY(1.8)
            this.object.translateX(-0.3)
        }
        this.object.scale.set(0.35, 0.35, 0.35)
    }

    private update() {
        this.contador += 0.02
        if (this.object) this.object.rotation.y = Math.sin(this.contador) / 7 + 1.8
        requestAnimationFrame(this.update.bind(this))
    }
}
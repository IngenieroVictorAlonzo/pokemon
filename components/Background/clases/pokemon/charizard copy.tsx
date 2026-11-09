import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default class charizard {

    private object: Group
       private contador = 0

    constructor(scene, loader: GLTFLoader) {
        loader.load("/charizard.glb", (gltf) => {
            this.object = gltf.scene
            this.posicionar()
            scene.add(this.object)
        })
        this.update()
    }

    private posicionar() {
        this.object.translateY(-2)
        this.object.translateX(-10)
        this.object.translateZ(16.5)
        this.object.rotateY(Math.PI / 2)
        this.object.scale.set(0.8, 0.8, 0.8)
    }

    private update() {
        this.contador += 0.03
        if (this.object) this.object.rotation.y = Math.sin(this.contador) / 7 + 1.8
        requestAnimationFrame(this.update.bind(this))
    }
}
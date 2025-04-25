import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default class Logo {

    private object: Group

    constructor(scene, loader: GLTFLoader) {
        loader.load("/logo.glb", (gltf) => {
            this.object = gltf.scene

            this.object.translateZ(-10)
            if (window.innerWidth > 900) {
                const ratio = (window.innerWidth - 900) * 3.2 / 460 + 5.6
                this.object.translateY(4)
                this.object.translateX(4)
            } else {
                this.object.translateY(7)
            }



            scene.add(this.object)
        })
    }
}
import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default class Pokeball {

    private object: Group

    constructor(scene, loader: GLTFLoader) {
        loader.load("/pokeball.glb", (gltf) => {
            this.object = gltf.scene

          
            if (window.innerWidth > 900) {
                const ratio = (window.innerWidth - 900) * 8 / 460 + 14
                this.object.translateY(-1)
                this.object.translateX(10)
                this.object.translateZ(-23)
                this.object.rotateY(-Math.PI/1.5)
            } else {
                this.object.translateY(5.8)
                this.object.translateZ(-20)
                this.object.rotateY(-Math.PI/2)
            }

            this.object.rotateZ(Math.PI/20)
            this.object.scale.set(2,2,2)



            scene.add(this.object)
        })
    }
}
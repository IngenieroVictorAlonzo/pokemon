import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Scene from "../../scenes/Scene";

export default class hierba {
    private object: Group
    private scene: Scene
    constructor(scene, loader: GLTFLoader) {
        this.scene = scene

        loader.load("/grass.glb", (gltf) => {
            this.object = gltf.scene
            this.clonar(-2, 19)
            this.clonar(-4, 20)
            //this.clonar(-4, 19)
            this.clonar(-6, 14)
            //this.clonar(-6, 20)
            this.clonar(-5, 20)
            //this.clonar(-3, 15)
            //this.clonar(-4, 14)
            this.clonar(-3, 16)
            this.clonar(-2, 17)
        })
    }

    private clonar(x, z) {
        const objeto = this.object.clone()
        objeto.translateZ(-2)
        objeto.translateX(x)
        objeto.translateZ(z)
        objeto.rotateY(Math.PI / 2)
        this.scene.add(objeto)
    }
}
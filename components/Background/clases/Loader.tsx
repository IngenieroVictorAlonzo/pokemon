import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"



export default class Loader extends GLTFLoader {

    constructor() {
        super()
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath("/draco/")
        dracoLoader.preload()
        dracoLoader.setDecoderConfig({ type: "js" })
        this.setDRACOLoader(dracoLoader)

    }
}
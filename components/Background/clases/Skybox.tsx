import { BackSide, Mesh, MeshPhongMaterial, SphereGeometry, TextureLoader } from "three"

export default class Skybox {

    constructor(scene) {
        const skyGeometry = new SphereGeometry(360, 25, 25)
        const loader = new TextureLoader()
        const textura = loader.load("/Lush_swamp_world.jpg")
        //const textura = loader.load("/custom-sky.png")
        const material2 = new MeshPhongMaterial({
            map: textura
        })
        const skybox = new Mesh(skyGeometry, material2)
        skybox.material.side = BackSide
        scene.add(skybox)

    }
}
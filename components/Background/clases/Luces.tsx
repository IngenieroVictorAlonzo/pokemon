import { AmbientLight, DirectionalLight, HemisphereLight } from "three"

export default class Luces {

    constructor(scene) {
        scene.add(new AmbientLight(0xffffff, 0.8))
        scene.add(new HemisphereLight(0xffffff, 0.8))
        const sol= new DirectionalLight(0xffffff,0.5)
        sol.position.set(20,20,5)
        scene.add(sol)
    }
}
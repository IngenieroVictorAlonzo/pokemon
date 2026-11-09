import {
    BufferGeometry,
    Float32BufferAttribute,
    Points,
    PointsMaterial,
    AdditiveBlending
} from "three"

export default class EnergyParticles {

    private particles: Points
    private positions: Float32Array
    private speeds: Float32Array
    private count = 20000

    constructor(scene) {

        console.log("EnergyParticles created")
        const geometry = new BufferGeometry()

        this.positions = new Float32Array(this.count * 3)
        this.speeds = new Float32Array(this.count)

        for (let i = 0; i < this.count; i++) {

            const i3 = i * 3

            this.positions[i3] = (Math.random() - 0.5) * 600
            this.positions[i3 + 1] = (Math.random() - 0.5) * 600
            this.positions[i3 + 2] = (Math.random() - 0.5) * 600

            this.speeds[i] = 0.1 + Math.random() * 0.5
        }

        geometry.setAttribute(
            "position",
            new Float32BufferAttribute(this.positions, 3)
        )

        const material = new PointsMaterial({
            size: 1.5,
            blending: AdditiveBlending,
            transparent: true
        })

        this.particles = new Points(geometry, material)

        scene.add(this.particles)

    }

    update() {

        //console.log("particles updating")

        this.particles.rotation.y += 0.01
        
       /*  for (let i = 0; i < this.count; i++) {

            const i3 = i * 3

            this.positions[i3 + 1] += this.speeds[i]

            if (this.positions[i3 + 1] > 300) {
                this.positions[i3 + 1] = -300
            }

        } */

        //this.particles.geometry.attributes.position.needsUpdate = true
        //this.particles.geometry.computeBoundingSphere()

    }

}
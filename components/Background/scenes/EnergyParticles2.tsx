import {
  PlaneGeometry,
  MeshBasicMaterial,
  InstancedMesh,
  Object3D,
  AdditiveBlending
} from "three"

export default class EnergyParticles2 {

  private mesh: InstancedMesh
  private dummy = new Object3D()
  private speeds: number[] = []
  private count = 20000

  constructor(scene) {

    const geometry = new PlaneGeometry(1, 1)

    const material = new MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false
    })

    this.mesh = new InstancedMesh(geometry, material, this.count)

    for (let i = 0; i < this.count; i++) {

      this.dummy.position.set(
        (Math.random() - 0.5) * 600,
        (Math.random() - 0.5) * 600,
        (Math.random() - 0.5) * 600
      )

      const scale = Math.random() * 1 + 0.05
      this.dummy.scale.set(scale, scale, scale)

      this.dummy.updateMatrix()

      this.mesh.setMatrixAt(i, this.dummy.matrix)

      this.speeds.push(0.1 + Math.random() * 0.5)
    }

    scene.add(this.mesh)
  }

  update() {

    for (let i = 0; i < this.count; i++) {

      this.mesh.getMatrixAt(i, this.dummy.matrix)
      this.dummy.matrix.decompose(
        this.dummy.position,
        this.dummy.quaternion,
        this.dummy.scale
      )

      this.dummy.position.y += this.speeds[i]

      if (this.dummy.position.y > 300) {
        this.dummy.position.y = -300
      }

      this.dummy.updateMatrix()
      this.mesh.setMatrixAt(i, this.dummy.matrix)
    }

    this.mesh.instanceMatrix.needsUpdate = true
  }

}
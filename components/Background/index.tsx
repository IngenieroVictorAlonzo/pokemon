import { Component, ReactNode } from "react"
import { AmbientLight, BackSide, BoxGeometry, HemisphereLight, Mesh, MeshBasicMaterial, MeshPhongMaterial, PerspectiveCamera, Scene, SphereGeometry, TextureLoader, WebGLRenderer } from "three"
import Renderer from "./Renderer"


export default class Background extends Component {
    componentDidMount = () => new Renderer()

    /*   console.log(window)
      const scene = new Scene()
      const renderer = new WebGLRenderer({
          antialias: true,
          canvas: document.getElementById("bg")
      })
      const camera = new PerspectiveCamera(
          50,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
      )

      //mover camera
      camera.position.z = 6

      //crear cubo
      const geometria = new BoxGeometry(1, 1, 1)
      const material = new MeshBasicMaterial({ color: 0xffffff })
      const cubo = new Mesh(geometria, material)
      scene.add(cubo)

      //crear skybox
      crearSkybox(scene)

      //crear iluminación
      scene.add(new AmbientLight(0xffffff, 0.8))
      scene.add(new HemisphereLight(0xffffff, 0.8))

      renderer.setSize(window.innerWidth, window.innerHeight)
      function animate() {
          cubo.rotation.x += 0.01
          cubo.rotation.y += 0.01
          renderer.render(scene, camera)
          requestAnimationFrame(animate)
      }
      animate() */


    render(): ReactNode {
        return <canvas id="bg"></canvas>
    }
}
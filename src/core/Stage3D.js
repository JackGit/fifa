import * as THREE from 'three'
const { WebGLRenderer, Scene, PerspectiveCamera, SpotLight, DirectionalLight } = THREE

const defaultOptions = {
  width: 375,
  height: 667
}

export default class Stage3D {
  constructor (el, options) {
    this.container = typeof el === 'string' ? document.getElementById(el) : el
    this.options = Object.assign({}, defaultOptions, options)

    this.renderer = null
    this.scene = null
    this.camera = null

    this.init()
  }

  init () {
    this.createRenderer()
    this.createScene()
    this.createCamera()
    this.createLight()
    this.loop()
    this.onInitialized()
  }

  onInitialized () {}

  createRenderer () {
    const { width, height } = this.options
    const renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true
    })

    renderer.setClearColor(0x000000, 0)
    renderer.setSize(width * 2, height * 2)
    renderer.domElement.style.position = 'relative'
    renderer.domElement.style.width = `${width}px`
    renderer.domElement.style.height = `${height}px`

    this.container.appendChild(renderer.domElement)
    this.renderer = renderer
  }

  createScene () {
    this.scene = new Scene()
  }

  createCamera () {
    const { width, height } = this.options
    const camera = new PerspectiveCamera(40, width / height, .1, 1000)
    camera.position.set(0, 0, 20)
    this.scene.add(camera)
    this.camera = camera
  }

  createLight () {
    const directionalLight = new DirectionalLight(0xffffff, 1)
    directionalLight.position.set(0, 2, 5)
    this.scene.add(directionalLight)
  }

  loop = () => {
    requestAnimationFrame(this.loop)
    this.render()
  }

  render () {
    this.renderer.render(this.scene, this.camera)
  }
}

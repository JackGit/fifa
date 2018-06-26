import { BoxGeometry, MeshPhongMaterial, Mesh, Object3D } from 'three'
import BaseStage3D from '@/core/Stage3D'
import { createEarth, createFootball, createFlagSprite } from './creation'
import COUNTRIES from '@/constants/countries'

class Stage3D extends BaseStage3D {
  constructor (props) {
    super(props)
    window.stage = this
    this.autoRotate = true
  }

  onInitialized () {
    this.objects = {}

    this.createSphereGroup()
    this.createEarth()
    this.createFootballBasic()
    this.createFootball1970()
  }

  createSphereGroup () {
    const group = new Object3D()
    this.objects.sphere = group
    this.scene.add(group)
  }

  createEarth () {
    const earth = createEarth()
    const earthGrey = createEarth('grey')
    earth.name = 'earth'
    earthGrey.name = 'earthGrey'

    const flagGroup = new Object3D()
    flagGroup.name = 'flags'
    Object.values(COUNTRIES).forEach(CTRY => {
      flagGroup.add(createFlagSprite(CTRY, {}))
    })

    this.objects.sphere.add(flagGroup)
    this.objects.sphere.add(earth)
    this.objects.sphere.add(earthGrey)

    this.objects.earth = earth
    this.objects.earthGrey = earthGrey
    this.objects.flag = flagGroup
  }

  createFootballBasic () {
    const football = createFootball('basic')
    football.name = 'footballBasic'
    this.objects.sphere.add(football)
    this.objects.footballBasic = football
  }

  createFootball1970 () {
    const football = createFootball('1970')
    football.name = 'football1970'
    this.objects.sphere.add(football)
    this.objects.football1970 = football
  }

  updateObject (objectKey, state) {
    // assign default values
    state = Object.assign({}, { opacity: 1, px: 0, py: 0, pz: 0, rx: 0, ry: 0, rz: 0, scale: 1 }, state)

    const obj = this.objects[objectKey]
    if (!obj) {
      console.warn(`Stage3D updateObject('${objectKey}') does not exit`)
      return
    }

    if (objectKey === 'flag') {
      obj.children.forEach(c => c.material.opacity = state.opacity)
    } else {
      obj.position.set(state.px, state.py, state.pz)
      obj.rotation.set(state.rx, state.ry, state.rz)
      obj.scale.set(state.scale, state.scale, state.scale)

      obj.material && (obj.material.opacity = state.opacity)
    }
  }

  render () {
    super.render()
    if (this.autoRotate && this.objects && this.objects.spheres) {
      this.objects.sphere.rotation.y += 0.0008
    }
  }
}

export default Stage3D

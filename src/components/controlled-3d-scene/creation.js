import {
  Mesh, SphereGeometry, MeshPhongMaterial,
  SpriteMaterial, Sprite
} from 'three'
import { getTexture } from '@/utils/texture'
import { latlng2Xyz } from '@/utils/math'

export function createEarth (type) {
  return new Mesh(
    new SphereGeometry(5, 32, 32),
    new MeshPhongMaterial({
      map: getTexture(type === 'grey' ? 'earthGrey' : 'earth'),
      bumpMap: getTexture('earthBump'),
      bumpScale: 0.15,
      specularMap: getTexture('earthSpec'),
      specular: 0xb5b5b5,
      shininess: 1,
      transparent: true
    })
  )
}

export function createFootball (type) {
  return new Mesh(
    new SphereGeometry(5, 32, 32),
    new MeshPhongMaterial({
      map: getTexture(type === 'basic' ? 'footballBasic' : 'football1970'),
      shininess: 5,
      transparent: true
    })
  )
}

export function createFlagSprite (country, { scale = 0.6, sphereRadius = 5.4 }) {
  const spriteMaterial = new SpriteMaterial({
    map: getTexture(country.flag),
    color: 0xffffff
  })
  const sprite = new Sprite(spriteMaterial)
  const { x, y, z } = latlng2Xyz(country.location.lat, country.location.lng, sphereRadius)
  sprite.position.set(x, y, z)
  sprite.scale.set(country.key === 'switzerland' ? scale : scale * 1.5, scale, scale)
  return sprite
}

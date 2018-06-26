import { TextureLoader } from 'three'
import IMAGES from '@/constants/images'

const loader = new TextureLoader()
loader.crossOrigin = ''

export function getCanvasImage (image, width, height) {
  const canvas = document.createElement('canvas')
  canvas.width = width || image.naturalWidth
  canvas.height = height || image.naturalHeight

  const context = canvas.getContext('2d')
  context.drawImage(image, 0, 0)
}

export function getTexture (imageName) {
  return loader.load(IMAGES[imageName])
}

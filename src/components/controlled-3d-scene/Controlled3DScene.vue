<template>
  <div class="c-controlledStage"></div>
</template>

<script>
import Stage3D from './Stage3D'
import Animation from '@/core/Animation'
import { WIDTH, HEIGHT } from '@/constants/pages'
import {
  sphereAnimationDef,
  earthAnimationDef,
  earthGreyAnimationDef,
  footballBasicAnimationDef,
  football1970AnimationDef,
  flagAnimationDef
} from '@/constants/animations'

export default {
  stage3d: null,
  animations: [],

  props: {
    progress: {
      type: Number,
      default: 0
    }
  },

  watch: {
    progress (value) {
      this.$options.stage3d.autoRotate = value === 0
      this.updateAnimations(value)
    }
  },

  mounted () {
    this.$options.stage3d = new Stage3D(this.$el, { width: WIDTH * 2, height: HEIGHT * 2 })

    const a0 = new Animation(sphereAnimationDef)
    const a1 = new Animation(earthAnimationDef)
    const a2 = new Animation(earthGreyAnimationDef)
    const a3 = new Animation(footballBasicAnimationDef)
    const a4 = new Animation(football1970AnimationDef)
    const a5 = new Animation(flagAnimationDef)

    a0.onUpdate(this.updateHandler('sphere'))
    a1.onUpdate(this.updateHandler('earth'))
    a2.onUpdate(this.updateHandler('earthGrey'))
    a3.onUpdate(this.updateHandler('footballBasic'))
    a4.onUpdate(this.updateHandler('football1970'))
    a5.onUpdate(this.updateHandler('flag'))

    this.$options.animations = [a0, a1, a2, a3, a4, a5]
    this.updateAnimations(0)
  },

  methods: {
    updateAnimations (progress) {
      this.$options.animations.forEach(animation => animation.update(progress))
    },
    updateHandler (objectKey) {
      const { stage3d } = this.$options
      return state => {
        stage3d.updateObject(objectKey, state)
      }
    }
  }
}
</script>

<style>
.c-controlledStage {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

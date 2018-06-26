<template>
  <div v-show="false">
    
  </div>
</template>

<script>
import { Howl } from 'howler'
import Animation from '@/core/Animation'
import { audioAnimationDef } from '@/constants/animations'
import track from '@/assets/sounds/la_copa_de_la_vida.mp3'

export default {
  animation: null,

  props: {
    progress: Number
  },

  watch: {
    progress (value) {
      this.$options.animation.update(value)
    }
  },

  data () {
    return {
      audio: track
    }
  },

  mounted () {
    let paused = true

    const howl = new Howl({
      src: [track],
      autoplay: false,
      loop: true,
      volume: 0,
      onpause: () => paused = true,
      onplay: () => paused = false
    })

    const animation = new Animation(audioAnimationDef)
    animation.onUpdate(state => {
      const { volume } = state

      if (volume === 0 && !paused) {
        howl.pause()
      } else if (volume > 0 && paused) {
        howl.play()
      }
      howl.volume(volume)
    })

    this.$options.animation = animation
 }
}
</script>

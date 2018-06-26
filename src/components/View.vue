<template>
  <div class="c-view">
    <div class="c-view__wrapper" ref="wrapper" :style="wrapperStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import CenterIt from 'center-it'

export default {
  wrapper: null,

  props: {
    width: {
      type: [Number, String],
      default: 375
    },
    height: {
      type: [Number, String],
      default: 667
    },
    centerType: {
      type: String,
      default: 'contain'
    }
  },

  computed: {
    wrapperStyle () {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
        margin: `-${this.height / 2}px 0 0 -${this.width / 2}px`
      }
    }
  },

  mounted () {
    this.$options.wrapper = this.$refs.wrapper
    window.addEventListener('resize', () => {
      this.resize()
    })
    this.resize()
  },

  methods: {
    resize () {
      const $wrapper = this.$options.wrapper
      const ratio = new CenterIt({
        containerWidth: window.innerWidth,
        containerHeight: window.innerHeight,
        originWidth: this.width,
        originHeight: this.height,
        centerType: this.centerType
      }).ratio()
      $wrapper.style.transform = `scale(${ratio})`
    }
  }
}
</script>

<style scoped>
.c-view {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.c-view__wrapper {
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 375px;
  height: 667px;
  margin: -333.5px 0 0 -187.5px;
  overflow: hidden;
}
</style>

<template>
  <div class="c-loading">
    <div class="c-wrapper">
      <div class="c-info">FIFA WORLD CUP IS {{progress}}% LOADED</div>
      <div class="c-progress">
        <div class="c-progress__inner" :style="{width: `${progress}%`}"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ResourceLoader from 'resource-loader'
import IMAGES from '@/constants/images'

export default {

  data () {
    return {
      progress: 0
    }
  },

  mounted () {
    const loader = new ResourceLoader()
    
    Object.keys(IMAGES).forEach(name => {
      loader.add(name, IMAGES[name])
    })
    
    loader.onProgress.add(() => {
      this.progress = Math.round(loader.progress)
    })
  
    loader.onComplete.add(() => {
      this.$emit('loaded')
    })
    
    loader.load()
  }
}
</script>

<style>
.c-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: #0f4583;
  color: #fff;
  text-align: center;
}
.c-wrapper {
  position: absolute;
  top: 46%;
  left: 0;
  width: 100%;
}
.c-progress {
  position: relative;
  display: inline-block;
  width: 60%;
  height: 4px;
  background: rgba(255,255,255,.2);
  border-radius: 2px;
}
.c-progress__inner {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  background: #fff;
  border-radius: 2px;
  transition: all .4s ease;
  will-change: width;
}
</style>
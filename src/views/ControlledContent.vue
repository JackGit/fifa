<template>
  <page-view center-type="cover">
    <!-- background image -->
    <div class="c-fixed z0">
      <vue-img-loader :src="backgroundImage" :preview="backgroundImagePreview" :width="width" :height="height" transition="fade" />
    </div>

    <!-- slider -->
    <div class="c-fixed z1">
      <controlled-slider :progress="progress" />
    </div>

    <!-- 3d scene -->
    <div class="c-fixed z2">
      <controlled-3d-scene :progress="progress" />
    </div>

    <!-- audio -->
    <controlled-audio :progress="progress" />

    <!-- scroll indicator -->
    <div class="c-scrollIndicator">
      <transition name="fade">
        <img src="@/assets/images/icons/arrow_down.png" v-if="progress === 0" />
      </transition>
    </div>
  </page-view>
</template>

<script>
import PageView from '@/components/View'
import VueImgLoader from 'vue-img-loader'
import ControlledSlider from '@/components/ControlledSlider'
import Controlled3DScene from '@/components/controlled-3d-scene/Controlled3DScene'
import ControlledAudio from '@/components/ControlledAudio'
import IMAGES from '@/constants/images'
import PAGES from '@/constants/pages'

export default {
  props: {
    progress: {
      type: Number,
      default: 0
    }
  },

  components: {
    PageView,
    VueImgLoader,
    ControlledAudio,
    ControlledSlider,
    'controlled-3d-scene': Controlled3DScene
  },

  data () {
    return {
      width: PAGES.WIDTH,
      height: PAGES.HEIGHT,
      backgroundImagePreview: IMAGES.bluePreviewBg,
      backgroundImage: IMAGES.russiaBlueBg
    }
  }
}
</script>

<style>
.c-fixed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.z0 {
  z-index: 0;
}
.z1 {
  z-index: 1;
}
.z2 {
  z-index: 2;
}
.z3 {
  z-index: 3;
}
.z4 {
  z-index: 4;
}
.c-scrollIndicator {
  position: fixed;
  bottom: 10px;
  left: 0;
  width: 100%;
  text-align: center;
  opacity: .8;
  z-index: 10;
  pointer-events: none;
}
.c-scrollIndicator img {
  width: 32px;
}
</style>

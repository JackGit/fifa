<template>
  <div class="c-scrollPage" :style="pageStyle">
    <div v-for="obj in displayObjects" :style="obj.style">
      {{obj.text}}
    </div>
  </div>
</template>

<script>
import { omit } from 'lodash'

export default {
  props: {
    pageData: {
      type: Object,
      required: true
    }
  },

  computed: {
    pageStyle () {
      return omit(this.pageData, ['displayObjects'])
    },
    displayObjects () {
      return this.pageData.displayObjects.map(obj => ({
        text: obj.text,
        style: omit(obj, ['text'])
      }))
    }
  }
}
</script>

<style scoped>
.c-scrollPage {
  position: relative;
  overflow: hidden;
}
</style>

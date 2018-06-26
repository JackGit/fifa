<template>
  <div id="app">
    <loading v-show="loading" @loaded="loadedHandler" />
    <transition name="fade">
      <div v-show="!loading">
        <controlled-content :progress="progress" />
        <scroll-page v-for="(page, index) in pages" :page-data="page" :key="index" />
      </div>
    </transition>
  </div>
</template>

<script>
import Loading from '@/views/Loading'
import ControlledContent from '@/views/ControlledContent'
import ScrollPage from '@/components/scroll-page/ScrollPage'
import PAGES from '@/constants/pages'

export default {
  name: 'App',
  maxScrollTop: null,
  maxScrollTopUpdateRequired: true,
  lastScrollTop: 0,

  components: {
    Loading,
    ControlledContent,
    ScrollPage
  },

  data () {
    return {
      loading: true,
      pages: PAGES.DEFINITIONS,
      progress: 0
    }
  },

  mounted () {
    window.addEventListener('resize', this.resizeHandler)
    window.addEventListener('scroll', this.scrollHandler)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.resizeHandler)
    window.removeEventListener('scroll', this.scrollHandler)
  },

  methods: {
    loadedHandler () {
      setTimeout(() => {
        this.loading = false
      }, 800)
    },
    resizeHandler () {
      this.$options.maxScrollTopUpdateRequired = true
    },
    scrollHandler (e) {
      const maxScrollTop = this.getMaxScrollTop()
      const { scrollTop } = window.document.scrollingElement

      const event = {
        originalEvent: e,
        scrollTop,
        maxScrollTop,
        percent: Math.min(scrollTop / maxScrollTop, 1),
        direction: scrollTop > this.$options.lastScrollTop ? 'forward' : 'backward'
      }

      // this.$emit('scroll', event)
      this.handleScroll(event)

      this.$options.lastScrollTop = scrollTop
    },
    getMaxScrollTop () {
      const { maxScrollTop, maxScrollTopUpdateRequired } = this.$options
      const { documentElement } = window.document

      if (maxScrollTopUpdateRequired) {
        this.$options.maxScrollTop = Math.max(0, PAGES.SCROLL_PAGE_HEIGHT * this.pages.length - documentElement.clientHeight)
        this.$options.maxScrollTopUpdateRequired = false
        return this.$options.maxScrollTop
      } else {
        return maxScrollTop
      }
    },
    handleScroll ({ scrollTop, maxScrollTop, percent, direction }) {
      this.progress = Math.max(0, percent * 100) // make sure process is greater than 0
      console.log('--progress--', this.progress)
    }
  }
}
</script>

<style>
@font-face {
  font-family: Russia;
  src: url('~@/assets/fonts/russia.ttf');
}

body {
  margin: 0;
  background: #0f4583;
}
#app {
  font-family: Russia, 'Avenir', Helvetica, Arial, sans-serif, '微软雅黑';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

import Vue from 'vue'
import App from './App'
import TWEEN from '@tweenjs/tween.js'
import * as THREE from 'three'
import { init } from './wx'

window.THREE = THREE
window.TWEEN = TWEEN
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

init()
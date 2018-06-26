/* Animation.runAnimation(animationName, {
  onStart () {},
  onUpdate () {},
  onComplete () {}
})

const animation = Animation.defineAnimation(animationName, {
  0: {},
  50: {
    triggerAnimation: {
      from: {},
      to: {},
      easing: xx,
      duration: 1000
    }
  },
  100: {}
})

animation.play({
  toPercent: 100 // default is play to the end
})

animation.stop()

// update animation frame by frame
animation.update(percent)

animation.percent // get current animation percent
*/
import TWEEN from '@tweenjs/tween.js'
const { Tween } = TWEEN

class Animation {
  constructor (definition) {
    this.definition = definition
    this.tweens = {}

    this.updateCallback = null

    this.init()
  }

  init () {
    this.createTweens()
    this.start()
  }

  createTweens () {
    const definition = this.definition
    const keys = Object.keys(definition)

    for (let i = 0; i < keys.length - 1; i++) {
      const fromKey = keys[i]
      const toKey = keys[i + 1]
      this.tweens[`${fromKey}-${toKey}`] = new TWEEN.Tween({
        ...definition[fromKey]
      }).to({
        ...definition[toKey]
      }).onUpdate(this.updateHandler)
    }
  }

  updateHandler = (values) => {
    this.updateCallback && this.updateCallback(values)
  }

  start () {
    Object.values(this.tweens).forEach(t => t.start())
  }

  /**
   * @param  {Number} percent valid range of percent: [0, 100]
   */
  update (percent) {
    // find a tween according to the percent
    const key = Object.keys(this.tweens).filter(k => {
      const [from, to] = k.split('-')
      return percent >= from && percent <= to
    })[0]
    const t = this.tweens[key]

    // calculate right percent for the tween
    const [from, to] = key.split('-')
    const tweenPercent = (percent - from) / (to - from) // range: [0, 1]

    // update the tween
    t.update(t._startTime + tweenPercent * t._duration)
  }

  onUpdate (callback) {
    this.updateCallback = callback
  }
}

export default Animation

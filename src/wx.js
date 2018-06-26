import fifaLogo from '@/assets/images/logos/logo_2018_fifa_world_cup.png'
const JSAPI_CONFIG_URL = 'http://wx-service.yotta-tech.cn/jsapi/config'

export function init () {
  fetch(`${JSAPI_CONFIG_URL}?url=${encodeURIComponent(window.location.href)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    mode: 'cors'
  }).then(
    r => r.json()
  ).then(r => {
    configWX(r.appId, r.timestamp, r.nonceStr, r.signature)
    setWXShare()
  })
}

/* weixin configs */
function configWX(appId, timestamp, nonceStr, signature) {
  wx.config({
    debug: false,
    appId,
    timestamp,
    nonceStr,
    signature,
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
  })
}

function setWXShare() {
  const title = '你需要了解的FIFA'
  const link = 'http://fifa.jackyang.me'
  const desc = '最酷的FIFA介绍'
  const imgUrl = fifaLogo

  wx.ready(() => {
    wx.onMenuShareTimeline({ title, link, imgUrl })
    wx.onMenuShareAppMessage({ title, desc, link, imgUrl })
  })
}

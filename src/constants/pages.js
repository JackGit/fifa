import { parse } from 'query-string'
import COUNTRIES from './countries'

import fifaLogo from '@/assets/images/logos/logo_fifa.png'
import worldCupTrophy from '@/assets/images/pic_world_cup_trophy.jpg'
import julesRimetTrophy from '@/assets/images/pic_jules_rimet_trophy.jpg'
import songCover from '@/assets/images/pic_song_cover.jpg'
import worldWarII from '@/assets/images/pic_world_war_ii_1943.jpg'

// const showAuthor = parse(window.location.search).showAuthor === 'true'
const showAuthor = true
const WIDTH = window.innerWidth
const HEIGHT = 812

const margin = WIDTH * 0.1
const width = WIDTH * 0.8

const DEFINITIONS = [{
  width: `${WIDTH}px`,
  height: `${HEIGHT}px`,
  position: 'relative',
  displayObjects: [{
    text: 'FIFA',
    position: 'absolute',
    top: '90px',
    left: `${margin}px`,
    color: '#fff',
    fontSize: '36px',
    fontWeight: 'bold'
  }, {
    text: 'WORLD CUP',
    position: 'absolute',
    top: '124px',
    left: `${margin}px`,
    color: '#fff',
    fontSize: '48px',
    fontWeight: 'bold'
  }, {
    text: '国际足联世界杯',
    position: 'absolute',
    color: '#fff',
    top: '180px',
    right: `${margin}px`,
    fontSize: '21px',
    fontWeight: 'bold'
  }, {
    text: 'by ygjack414@hotmail.com',
    position: 'absolute',
    color: 'rgba(255,255,255,.6)',
    top: '220px',
    left: `${margin}px`,
    right: `${margin}px`,
    textAlign: 'right',
    opacity: showAuthor ? 1 : 0
  }]
}, {
  width: `${WIDTH}px`,
  height: `${HEIGHT}px`,
  position: 'relative',
  displayObjects: [{
    position: 'absolute',
    backgroundColor: '#fff',
    backgroundImage: `url(${fifaLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    color: '#fff',
    top: '40px',
    left: `${margin}px`,
    width: '220px',
    height: '110px'
  }, {
    text: '国际足联世界杯（FIFA World Cup），简称“世界杯”，与奥运会并称为全球体育两大顶级赛事。',
    position: 'absolute',
    color: '#fff',
    top: '165px',
    left: `${margin}px`,
    right: `${margin}px`
  }]
}, {
  width: `${WIDTH}px`,
  height: `${HEIGHT}px`,
  position: 'relative',
  displayObjects: [{
    position: 'absolute',
    backgroundColor: '#fff',
    backgroundImage: `url(${worldWarII})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    top: '40px',
    left: `${margin}px`,
    right: `${margin}px`,
    width: `${width}px`,
    height: `${width / 3 * 2}px`
  }, {
    text: '世界杯从 1930 年起，每 4 年举办一次，其中 1942 年与 1946 年因第二次世界大战而没有举办。',
    position: 'absolute',
    color: '#fff',
    top: `${40 + width / 3 * 2 + 15}px`,
    left: `${margin}px`,
    right: `${margin}px`
  }]
}, {
  width: `${WIDTH}px`,
  height: `${HEIGHT}px`,
  position: 'relative',
  displayObjects: [{
    text: '至今，世界杯一共在 17 个国家举办过：' + Object.values(COUNTRIES).map(c => c.name).join('，') + '。',
    position: 'absolute',
    color: '#fff',
    top: '40px',
    left: `${margin}px`,
    right: `${margin}px`
  }]
}, {
  width: `${WIDTH}px`,
  height: `${HEIGHT}px`,
  position: 'relative',
  displayObjects: [{
    position: 'absolute',
    backgroundColor: '#fff',
    backgroundImage: `url(${julesRimetTrophy})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    top: '40px',
    left: `${margin}px`,
    width: `${width / 2}px`,
    height: `${width * 7 / 10}px`
  }, {
    position: 'absolute',
    backgroundColor: '#fff',
    backgroundImage: `url(${worldCupTrophy})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    top: '40px',
    left: `${margin + width / 2}px`,
    width: `${width / 2}px`,
    height: `${width * 7 / 10}px`
  }, {
    text: '世界杯从 1930 年至今，有过两座奖杯：“雷米特金杯”和“大力神杯”。“大力神杯”是在 1970 年墨西哥世界杯后，开始在每届冠军国家队中进行传递。 并且FIFA 规定，“大力神杯”不会再被任何一个国家永久占有，无论该国国家队赢得多少次世界杯冠军。',
    position: 'absolute',
    color: '#fff',
    top: `${40 + width * 7 / 10 + 15}px`,
    left: `${margin}px`,
    right: `${margin}px`
  }]
}, {
  width: `${WIDTH}px`,
  height: `${HEIGHT}px`,
  position: 'relative',
  displayObjects: [{
    text: '巴西是唯一一个参加了所有世界杯的国家，也是获得冠军次数最多的国家，一共获得过 5 次世界杯冠军；并且在 1970 年墨西哥世界杯中，因获得 3 次冠军，而永久的拥有了当时的奖杯，“雷米特金杯”。但 1983 年，“雷米特金杯”在里约被偷走，至今下落不明。',
    position: 'absolute',
    color: '#fff',
    top: '40px',
    left: `${margin}px`,
    right: `${margin}px`
  }]
}, {
  width: `${WIDTH}px`,
  height: `${HEIGHT}px`,
  position: 'relative',
  displayObjects: [{
    text: '1970 年墨西哥世界杯，阿迪达斯在国际足联要求下，第一次给世界杯提供用球。至今阿迪达斯已为世界杯足球赛研制了 13 种官方用球。',
    position: 'absolute',
    color: '#fff',
    top: '40px',
    left: `${margin}px`,
    right: `${margin}px`
  }]
}, {
  width: `${WIDTH}px`,
  height: `${HEIGHT}px`,
  position: 'relative',
  displayObjects: [{
    text: '有人说，世界上有两种通用的语言，一种是足球，一种是音乐，而世界杯让两者达到了完美的统一。（以下内容请打开声音）',
    position: 'absolute',
    color: '#fff',
    top: '40px',
    left: `${margin}px`,
    right: `${margin}px`
  }]
}, {
  width: `${WIDTH}px`,
  height: `${HEIGHT}px`,
  position: 'relative',
  displayObjects: [{
    position: 'absolute',
    backgroundColor: '#fff',
    backgroundImage: `url(${songCover})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    color: '#fff',
    top: '40px',
    left: `${(WIDTH - 300) / 2}px`,
    width: '300px',
    height: '300px',
    border: '4px solid #fff',
    boxSizing: 'border-box',
    borderRadius: '50%',
    animation: 'rotate 20s linear infinite'
  }, {
    text: 'La Copa de la Vida（生命之杯），1998 年法国世界杯主题曲，由 Ricky Martin 演唱。可能是历史上最成功的世界杯主题曲了。',
    position: 'absolute',
    color: '#fff',
    top: '355px',
    left: `${margin}px`,
    right: `${margin}px`
  }]
}, {
  width: `${WIDTH}px`,
  height: `${HEIGHT}px`,
  position: 'relative',
  displayObjects: [{
    text: '2018 俄罗斯世界杯（Чемпиона́т ми́ра по футбо́лу） 6 月 14 日如约而至，准备好啤酒和小龙虾，和这夏日一起激情热烈起来吧。',
    position: 'absolute',
    color: '#fff',
    bottom: '100px',
    left: `${margin}px`,
    right: `${margin}px`
  }]
}]

export default {
  WIDTH: 375,
  HEIGHT: 667,
  SCROLL_PAGE_HEIGHT: HEIGHT,
  DEFINITIONS
}

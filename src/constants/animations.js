const telstarRotationOffset = { x: Math.PI / 2, y: Math.PI / -2, z: 0 }

export const sphereAnimationDef = {
  0: { scale: 1, rx: 0, ry: 0, rz: 0, px: 0, py: -6, pz: 7 },
  2: { scale: 1, rx: 0, ry: 0, rz: 0, px: 0, py: -6, pz: 7 },

  // earth
  10: { scale: 1, rx: 0, ry: Math.PI * 1.1, rz: 0, px: 0, py: -3, pz: -8 },
  13: { scale: 1, rx: 0, ry: Math.PI * 1.1, rz: 0, px: 0, py: -3, pz: -8 },

  // earth in war
  20: { scale: 1, rx: Math.PI / 8, ry: Math.PI / -1.3, rz: 0, px: 0, py: -14, pz: -60 },
  25: { scale: 1, rx: Math.PI / 8, ry: Math.PI / -1.3, rz: 0, px: 0, py: -14, pz: -60 },

  // earth with flags
  30: { scale: 1, rx: 0, ry: Math.PI * 2, rz: 0, px: 0, py: -3, pz: -8 },
  36: { scale: 1, rx: 0, ry: 0, rz: 0, px: 0, py: -3, pz: -8 },

  // football
  42: { scale: 1, rx: 0, ry: 0, rz: 0, px: 0, py: -14, pz: -60 },
  58: { scale: 1, rx: 0, ry: Math.PI * -4, rz: 0, px: 0, py: -14, pz: -60 },

  // 1970 telstar
  62: { scale: 1, rx: 0 + telstarRotationOffset.x, ry: Math.PI * -2 + telstarRotationOffset.y, rz: 0 +  + telstarRotationOffset.z, px: 0, py: -3, pz: -8 },
  68: { scale: 1, rx: 0 + telstarRotationOffset.x, ry: Math.PI * -2 + telstarRotationOffset.y, rz: 0 +  + telstarRotationOffset.z, px: 0, py: -3, pz: -8 },

  72: { scale: 10, rx: 0, ry: 0, rz: 0, px: 0, py: -3, pz: -8 },
  92: { scale: 10, rx: 0, ry: 0, rz: 0, px: 0, py: -3, pz: -8 },

  100: { scale: 1, rx: 0, ry: Math.PI * 2, rz: 0, px: 0, py: 9, pz: -200 }
}

export const earthAnimationDef = {
  0: { opacity: 0 },
  2: { opacity: 0 },
  10: { opacity: 1 },
  13: { opacity: 1 },
  20: { opacity: 0 },
  26: { opacity: 0 },
  28: { opacity: 1 },
  44: { opacity: 1 },
  50: { opacity: 0 },
  100: { opacity: 0 }
}

export const earthGreyAnimationDef = {
  0: { opacity: 0 },
  13: { opacity: 0 },
  20: { opacity: 1 },
  26: { opacity: 1 },
  28: { opacity: 0 },
  100: { opacity: 0 }
}

export const footballBasicAnimationDef = {
  0: { opacity: 1 },
  2: { opacity: 1 },
  10: { opacity: 0 },
  36: { opacity: 0 },
  42: { opacity: 1 },
  58: { opacity: 1 },
  62: { opacity: 0 },
  96: { opacity: 1 },
  100: { opacity: 0 }
}

export const football1970AnimationDef = {
  0: { opacity: 0 },
  58: { opacity: 0 },
  62: { opacity: 1 },
  79: { opacity: 1 },
  84: { opacity: 0 },
  100: { opacity: 0 }
}

export const flagAnimationDef = {
  0: { opacity: 0 },
  28: { opacity: 0 },
  32: { opacity: 1 },
  38: { opacity: 1 },
  40: { opacity: 0 },
  100: { opacity: 0 }
}

export const sliderAnimationDef = {
  0: { brazilChampion: 0, worldCup1938: 0, worldCup2014: 0, russiaBlueRed: 0, footballs: 0 },
  13: { brazilChampion: 0, worldCup1938: 0, worldCup2014: 0, russiaBlueRed: 0, footballs: 0 },
  17: { brazilChampion: 0, worldCup1938: 1, worldCup2014: 0, russiaBlueRed: 0, footballs: 0 },
  25: { brazilChampion: 0, worldCup1938: 1, worldCup2014: 0, russiaBlueRed: 0, footballs: 0 },
  29: { brazilChampion: 0, worldCup1938: 0, worldCup2014: 0, russiaBlueRed: 0, footballs: 0 },
  48: { brazilChampion: 0, worldCup1938: 0, worldCup2014: 0, russiaBlueRed: 0, footballs: 0 },
  52: { brazilChampion: 1, worldCup1938: 0, worldCup2014: 0, russiaBlueRed: 0, footballs: 0 },
  58: { brazilChampion: 1, worldCup1938: 0, worldCup2014: 0, russiaBlueRed: 0, footballs: 0 },
  62: { brazilChampion: 0, worldCup1938: 0, worldCup2014: 0, russiaBlueRed: 0, footballs: 1 },
  69: { brazilChampion: 0, worldCup1938: 0, worldCup2014: 0, russiaBlueRed: 0, footballs: 1 },
  70: { brazilChampion: 0, worldCup1938: 0, worldCup2014: 1, russiaBlueRed: 0, footballs: 0 },
  93: { brazilChampion: 0, worldCup1938: 0, worldCup2014: 1, russiaBlueRed: 0, footballs: 0 },
  94: { brazilChampion: 0, worldCup1938: 0, worldCup2014: 0, russiaBlueRed: 1, footballs: 0 },
  100: { brazilChampion: 0, worldCup1938: 0, worldCup2014: 0, russiaBlueRed: 1, footballs: 0 }
}

export const audioAnimationDef = {
  0: { volume: 0 },
  70: { volume: 0 },
  76: { volume: 1 },
  100: { volume: 1 }
}

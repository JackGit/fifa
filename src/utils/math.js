export const latlng2Xyz = (lat, lng, radius) => {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  const x = -((radius) * Math.sin(phi) * Math.cos(theta))
  const z = ((radius) * Math.sin(phi) * Math.sin(theta))
  const y = ((radius) * Math.cos(phi))
  return { x: x.toFixed(6) * 1, y: y.toFixed(6) * 1, z: z.toFixed(6) * 1 }
}

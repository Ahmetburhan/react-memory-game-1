export function flipUp (id, val) {
  return {
    type: 'FLIP_UP',
    tile: id,
    value: val
  }
}

// export function match (id) {
//   return {
//     type: 'MATCH',
//     tile: id
//   }
// }

// export function flipTilesDown () {
//   return {
//     type: 'FLIP_DOWN'
//   }
// }


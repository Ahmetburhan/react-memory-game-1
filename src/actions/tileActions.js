export function flipUp (id, val) {
  return {
    type: 'FLIP_UP',
    tileID: id,
    value: val
  }
}

export function match () {
  return {
    type: 'MATCH'
  }
}

export function flipTilesDown () {
  return {
    type: 'FLIP_DOWN'
  }
}


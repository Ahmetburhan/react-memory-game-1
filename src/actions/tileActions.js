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

// change app state.values array
function changeLevel (level) {
  return {
    type: 'CHANGE_LVL',
    lvl: level
  }
}

export function resetGame () {
  return {
    type: 'RESET_GAME'
  }
}
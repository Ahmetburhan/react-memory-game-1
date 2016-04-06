import { generateValues } from './helpers'

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

export function resetGame () {
  return {
    type: 'RESET_GAME'
  }
}

// change app state.values array
export function changeLevel (level) {
  let val = generateValues(level)
  return {
    type: 'CHANGE_LVL',
    lvl: level,
    val: val
  }
}
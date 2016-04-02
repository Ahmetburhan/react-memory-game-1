import { combineReducers } from 'redux'
import tiles from './tiles'
import board from './board'

const rootReducer = combineReducers({
  tiles,
  board
})

export default rootReducer
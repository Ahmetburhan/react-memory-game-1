const initialState = {
  values: [ 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'],
  activeValues: [],
  matchedTilesIDs: [],
  tilesFlipped: 0
}

export default function tiles (state = initialState, action) {
  switch (action.type) {
    case 'FLIP_UP':
    let updatedActiveValues = state.activeValues.concat(action.value)

    // console.log('this should be added to state', updatedActiveValues)
    return {
      ...state,
      activeValues: updatedActiveValues
    }
    // case 'MATCH':
    // let updatedMatchedTilesIDs = state.matchedTilesIDs.concat(action.tile)
    // return {
    //   matchedTilesIDs: updatedMatchedTilesIDs,
    //   tilesFlipped: state.tilesFlipped += 1
    // }
    // case 'FLIP_DOWN':
    // return {
    //   ...state,
    //   activeValues: [] // ,matchedTilesIDs: updatedFacedUps
    // }
  }
  return state
}
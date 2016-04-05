const initialState = {
  values: [ 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'],
  pair: [],
  matchedTilesIDs: [],
  tilesFlipped: 0
}

export default function tiles (state = initialState, action) {
  let updatedMatchedTilesIDs
  switch (action.type) {
    case 'FLIP_UP':
    let updatedPair = state.pair.concat(action.value)
    updatedMatchedTilesIDs = state.matchedTilesIDs.concat(action.tileID)
    // track tiles
    return {
      ...state,
      pair: updatedPair,
      matchedTilesIDs: updatedMatchedTilesIDs
    }
    case 'MATCH':
    // clear pair array and add to count
    return {
      ...state,
      pair: [],
      tilesFlipped: state.tilesFlipped += 2
    }
    case 'FLIP_DOWN':
    // clear pair array & remove the last two elements of matchedTilesIDs
    updatedMatchedTilesIDs = state.matchedTilesIDs.slice(0, state.matchedTilesIDs.length - 2)

    return {
      ...state,
      pair: [],
      matchedTilesIDs: updatedMatchedTilesIDs
    }
  }
  return state
}
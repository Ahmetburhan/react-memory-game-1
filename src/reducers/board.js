const initialState = {
  setting: 'Easy',
  values: [ 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D']
}

export default function board (state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_LVL':
    return {
      ...state,
      setting: action.lvl,
      values: action.val
    }
  }
  return state
}
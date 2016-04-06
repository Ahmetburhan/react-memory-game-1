const initialState = {
  setting: 'Easy',
  values: [ 'D', 'C', 'B', 'A', 'C', 'A', 'B', 'D']
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
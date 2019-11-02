export default function gameReducer(state = {games: []}, action) {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {games: action.payload}
    default:
      return state
  }
}

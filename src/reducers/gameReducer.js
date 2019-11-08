export default function gameReducer(state = {games: []}, action) {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {games: action.payload}

    case 'ADD_NUMBER':
      return {...state, games: [...state.accounts, action.payload]}

    default:
      return state
  }
}

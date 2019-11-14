export default function gameReducer(state = {games: []}, action) {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {games: action.payload}

    case 'ADD_NUMBER':
      let games = state.games.map(game => {
        game.map(number => {
          if (number.id === action.payload.id) {
            return action.payload
          } else {
            return number
          }
        })
        return game
      })
      return {...state, games: games}

    default:
      return state
  }
}

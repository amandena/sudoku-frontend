export function fetchGames() {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/games')
      .then(res => res.json())
      .then(games => dispatch({
        type: 'FETCH_GAMES',
        payload: games
      }))
  }
}

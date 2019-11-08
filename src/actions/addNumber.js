export const addNumber = data => {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/games', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(game => dispatch({type: 'ADD_NUMBER', payload: game}))
  }
}

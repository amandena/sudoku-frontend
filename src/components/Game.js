import React from 'react'

const Game = props => {

  let game = props.games[props.match.params.id - 1]
  
  return (
    <div>
    {game ? game.numbers : null}
    {game ? game.difficulty : null}
    {game ? game.won : null}
    </div>
  )
}

export default Game

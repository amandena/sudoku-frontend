import React from 'react'

const Game = props => {

  return (
    <div>
      {props.game.numbers}
      {props.game.difficulty}
      {props.game.won}
    </div>
  )
}

export default Game

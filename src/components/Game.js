import React from 'react'
import {Redirect} from 'react-router-dom'

const Game = props => {

  let game = props.games[props.match.params.id - 1]

  return (
    <div>
    {game ? null : <Redirect to='/games' />}
    {game ? game.numbers : null}
    {game ? game.difficulty : null}
    {game ? game.won : null}
    </div>
  )
}

export default Game

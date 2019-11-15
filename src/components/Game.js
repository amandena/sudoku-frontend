import React from 'react'
import Box from './Box'
// import {Redirect} from 'react-router-dom'

const Game = props => {

  let game = props.games[props.match.params.id - 1]

  return (
    <div>
      {/*game ? null : <Redirect to='/games' />} {/*not working properly*/}
      {game ? game.numbers : null}
      {game ? game.difficulty : null}
      {game ? game.won : null}
      <Box />
    </div>
  )
}

export default Game

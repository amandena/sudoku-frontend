import React from 'react'
import Game from './Game'

const Board = props => {

  return (
    <div>
      {props.games.map(game => <div key={game.id}><Game game={game}/></div>)}
    </div>
  )
}

export default Board

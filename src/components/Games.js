import React from 'react'
import Game from './Game'

const Games = props => {

  return (
    <div>
      {props.games.map(game => <div key={game.id}><Game game={game}/></div>)}
    </div>
  )
}

export default Games

import React from 'react'
import {Link} from 'react-router-dom'


const Games = props => {

  return (
    <div>
      {props.games.map(game => <div key={game.id}>
        <Link to={`/games/${game.id}`}>{game.difficulty}</Link>
      </div>)}
    </div>
  )
}

export default Games

import React from 'react'

const Grid = props => {

  return (
    <div>
      {props.games.map(game => <li key={game.id}>{game.numbers}, {game.difficulty}, {game.won}</li>)}
    </div>
  )
}

export default Grid

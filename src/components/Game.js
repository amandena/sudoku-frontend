import React from 'react'
import Row from './Row'
// import {Redirect} from 'react-router-dom'

const Game = props => {

  let game = props.games[props.match.params.id - 1]

  return (
    <div>
      {/*game ? null : <Redirect to='/games' />} {/*not working properly*/}
      {game ? game.numbers : null}
      {game ? game.difficulty : null}
      {game ? game.won : null}
      <Row id="1"/>
      <Row id="2"/>
      <Row id="3"/>
      <Row id="4"/>
      <Row id="5"/>
      <Row id="6"/>
      <Row id="7"/>
      <Row id="8"/>
      <Row id="9"/>
    </div>
  )
}

export default Game

import React from 'react'
import Row from './Row'
import '../css/Board.css'
// import {Redirect} from 'react-router-dom'

const Game = props => {

  let game = props.games[props.match.params.id - 1]

  let splitNumbers = () => {
    if (game && game.numbers) {
      return game.numbers.split("")
    }
  }


  return (
    <div>
      {/*game ? null : <Redirect to='/games' />} {/*not working properly*/}
      {splitNumbers()}
      {game ? game.difficulty : null}
      {game ? game.won : null}
      <div className="board">
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
    </div>
  )
}

export default Game

import React from 'react'
import {connect} from 'react-redux'
import GameInput from '../components/GameInput'
import GamesList from '../components/GamesList'

class GamesContainer extends React.Component {

  render() {
    return (
      <div>
        <GameInput />
        <GamesList />
      </div>
    )
  }
}

export default connect()(GamesContainer)

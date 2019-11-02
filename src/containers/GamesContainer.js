import React from 'react'
import {connect} from 'react-redux'
import GameInput from '../components/GameInput'
import GamesList from '../components/GamesList'
import {fetchGames} from '../actions/fetchGames'

class GamesContainer extends React.Component {

  componentDidMount() {
    this.props.fetchGames()
  }

  render() {
    return (
      <div>
        <GameInput />
        <GamesList games={this.props.games} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps, {fetchGames})(GamesContainer)

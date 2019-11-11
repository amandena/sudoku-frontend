import React from 'react'
import {connect} from 'react-redux'
import Box from '../components/Box'
import Board from '../components/Board'
import {fetchGames} from '../actions/fetchGames'

class GamesContainer extends React.Component {
  state = {
    games: ''
  }

  componentDidMount() {
    this.props.fetchGames()
  }

  render() {

    return (
      <div>
        <Box />
        <Board games={this.props.games} />
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

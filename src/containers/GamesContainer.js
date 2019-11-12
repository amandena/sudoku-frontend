import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import Box from '../components/Box'
import Games from '../components/Games'
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
        <Route path='/games' render={() => <Games games={this.props.games} />} />
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

import React from 'react'
import {connect} from 'react-redux'
import Box from '../components/Box'
import Grid from '../components/Grid'
import {fetchGames} from '../actions/fetchGames'

class GamesContainer extends React.Component {

  componentDidMount() {
    this.props.fetchGames()
  }

  render() {
    return (
      <div>
        <Box />
        <Grid games={this.props.games} />
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

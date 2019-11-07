import React from 'react'
import {connect} from 'react-redux'
import Box from '../components/Box'
import Grid from '../components/Grid'
import {fetchGames} from '../actions/fetchGames'

class GamesContainer extends React.Component {
  state = {
    height: 9,
    width: 9
  }

  componentDidMount() {
    this.props.fetchGames()
  }

  render() {
    const { height, width } = this.state

    return (
      <div>
        <Box />
        <Grid height={height} width={width} />
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

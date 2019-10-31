import React from 'react'
import {connect} from 'react-redux'
import GamesContainer from './containers/GamesContainer'

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <GamesContainer />
      </div>
    )
  }
}


export default connect()(App)

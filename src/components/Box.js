import React from 'react'
import {connect} from 'react-redux'
import {addNumber} from '../actions/addNumber'
import '../css/Box.css'

class Box extends React.Component {
  state = {
    number: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addNumber(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className="box" type="text" value={this.state.name} name="number" onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default connect(null, {addNumber})(Box)

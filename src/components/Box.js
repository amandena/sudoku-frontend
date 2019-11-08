import React from 'react'

class Box extends React.Component {
  state = {
    number: ''
  }

  // getValue() {
  //   const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  //   const {value} = this.props
  //
  //   if (values.includes(value)) {
  //     return this.props.value
  //   } else if (value === '0') {
  //     return null
  //   }
  // }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" value={this.state.name} name="number" onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default Box

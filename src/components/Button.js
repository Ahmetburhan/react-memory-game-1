import React, { Component } from 'react'

export default class Button extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.props.reset()
  }
  render () {
    const { reset } = this.props
    return (
      <button onClick={this.handleClick} className='reset-btn'>reset</button>
    )
  }
}

import React, { Component } from 'react'

export default class Tile extends Component {
  constructor (props) {
    super(props)
    // Bind event handlers
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    console.log('you clicked me!')
  }
  render () {
    const { value } = this.props
    return (
      <div className="tile" onClick={handleClick}>
        {value}
      </div>
    )
  }
}

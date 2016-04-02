import React, { Component } from 'react'

export default class Tile extends Component {
  constructor (props) {
    super(props)
    // Bind event handlers
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    this.props.actions.flipUp(this.props.id, e.target.innerHTML) // flipUp('A')
    this.props.checkMatching() // this invokes before state gets mapped to props
    // change this to an asynchronous action that has access to state
  }
  render () {
    const { value, face } = this.props
    return (
      // if first in active, show value and have it stay
      <div className="tile" onClick={this.handleClick}>
        {value}
      </div>
    )
  }
}

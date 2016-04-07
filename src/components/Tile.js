import React, { Component } from 'react'

export default class Tile extends Component {
  constructor (props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  onClick () {
    this.props.handleClicker(this.props.id, this.props.value)
  }
  render () {
    const { value } = this.props
    if (this.props.tiles.matchedTilesIDs.indexOf(this.props.id) !== -1) {
      return (
        <div className='tile' id='value' onClick={this.onClick}>
        {value}
        </div>
      )
    } else {
        return (
        <div className='tile' id='kitty' onClick={this.onClick}>
        </div>
      )
    }
  }
}

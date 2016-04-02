import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as tileActions from './actions/tileActions'
import Tile from './components/Tile'

class MemoryBoard extends Component {
  render () {
    const { tiles } = this.props

    let tileElements = tiles.values.map((val, index) =>
      <Tile key={index} value={val} />
    )

    return (
      <div id="memory-board">
        {tileElements}
      </div>
    )
  }
}

const mapStateToProps = ({tiles, setting}) => {
  return { tiles, setting }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(tileActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemoryBoard)
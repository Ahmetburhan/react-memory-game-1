import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as tileActions from './actions/tileActions'

class MemoryBoard extends Component {
  render () {
    console.log(this.props)
    return (
      <div id="memory-board">
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
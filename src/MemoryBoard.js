import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as tileActions from './actions/tileActions'
import Tile from './components/Tile'

class MemoryBoard extends Component {
  constructor (props) {
    super(props)
    this.checkMatching = this.checkMatching.bind(this)
  }
  checkMatching () {
    // const { activeValues } = this.props.tiles
    // if the two active tiles match, it will stay facing up
    // else face both down

    // console.log(this.props.tiles.activeValues)
    // console.log('=====')
    // console.log(store.getState().tiles.activeValues)
  }
  render () {

    console.log(this.props.tiles.activeValues)
    
    const { tiles } = this.props
    const { actions } = this.props
    let face = 'Down'


    let tileElements = tiles.values.map((val, index) =>
      <Tile
        {...this.props}
        key={index}
        id={index}
        value={val}
        face={face}
        checkMatching={this.checkMatching} />
    )

    return (
      <div id="memory-board">
        {tileElements}
      </div>
    )
  }
}

const mapStateToProps = ({tiles, board}) => {
  return { tiles: tiles, board: board }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(tileActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemoryBoard)
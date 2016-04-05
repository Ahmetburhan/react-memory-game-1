import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as tileActions from './actions/tileActions'
import Tile from './components/Tile'

class MemoryBoard extends Component {
  constructor (props) {
    super(props)
    this.checkPairs = this.checkPairs.bind(this),
    this.handleClicker = this.handleClicker.bind(this)
  }
  checkPairs (id) {
    const { pair } = store.getState().tiles // need to replace this ;)
    // console.log(this.props.actions)
    if (pair.length === 2) {
      if (pair[0] === pair[1]) {
        this.props.actions.match(id)
      }
      else {
        // in 5 seconds, clear matchedTileIDs array and pair array
        setTimeout(() => { this.props.actions.flipTilesDown(id) }, 5000)
      }
    }
  }
  handleClicker (id, value) {
    // need to check if user has clicked a different tile than previous one
    if (this.props.tiles.matchedTilesIDs.indexOf(id) === -1) {
      this.props.actions.flipUp(id, value) // flipUp('A')
      this.checkPairs(id)
    }
  }
  render () {
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
        checkPairs={this.checkPairs}
        handleClicker={this.handleClicker} />
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
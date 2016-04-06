import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as game from './actions/game'
import Tile from './components/Tile'

class MemoryBoard extends Component {
  constructor (props) {
    super(props)
    this.checkPairs = this.checkPairs.bind(this),
    this.resetGame = this.resetGame.bind(this),
    this.handleClicker = this.handleClicker.bind(this)
  }
  checkPairs (id) {
    // 'this' points to MemoryBoard here, with the props correctly mapped...BUT
    // 'this.props' doesn't seem to be updated with the state...
    // maybe because this code is executed before the next map state to props

    // Bad practice, but will use the state of the store for now
    const { pair } = store.getState().tiles

    if (pair.length === 2) {
      if (pair[0] === pair[1]) {
        console.log('matching pair')
        this.props.actions.match(id)
      }
      else {
        console.log('not matching')
        // ISSUE when settimeout is ran and user clicks another tile at the same time

        // in 5 seconds, clear matchedTilesIDs array and pair array
        setTimeout(() => { this.props.actions.flipTilesDown(id) }, 100)
      }
    }
    if (store.getState().tiles.matchedTilesIDs.length >= this.props.board.values.length) {
      // delay invocation the tile actually flips before resetting the game
      console.log('resetting game')
      setTimeout(() => { this.resetGame() }, 500)
    }
  }
  resetGame () {
    alert('you got all')
    this.props.actions.resetGame()
  }
  handleClicker (id, value) {
    // need to check if user has clicked a different tile than previous one
    if (this.props.tiles.matchedTilesIDs.indexOf(id) === -1) {
      this.props.actions.flipUp(id, value) // flipUp('A')
      this.checkPairs(id)
    }
  }
  render () {
    const { tiles, board } = this.props
    const { actions } = this.props

    let tileElements = board.values.map((val, index) =>
      <Tile
        {...this.props}
        key={index}
        id={index}
        value={val}
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
    actions: bindActionCreators(game, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemoryBoard)
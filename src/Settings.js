import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as game from './actions/game'
import Option from './components/Option'
import Button from './components/Button'

export default class Settings extends Component {
  constructor (props) {
    super(props)
    this.handleSetting = this.handleSetting.bind(this),
    this.handleReset = this.handleReset.bind(this)
  }
  handleSetting (e) {
   this.props.actions.changeLevel(e.target.value) // change level
   // reset game with new level
   this.props.actions.resetGame()
  }
  handleReset () {
    this.props.actions.resetGame()
  }
  render () {
    const { tilesFlipped } = this.props.tiles
    const options = ['Easy', 'Medium', 'Hard']
    return (
      <div className='top-row'>
        <div className='column'>
          <select
            onChange={this.handleSetting.bind(this)} >
            <Option value='Easy' />
            <Option value='Medium' />
            <Option value='Hard' />
          </select>
        </div>
        <div className='column'>
          Score: {tilesFlipped}
        </div>
        <div className='column'>
          <Button
            reset={this.handleReset}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
} // don't really need this yet..

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(game, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
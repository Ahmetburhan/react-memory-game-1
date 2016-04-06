import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as tileActions from './actions/tileActions'
import Option from './components/Option'

export default class Settings extends Component {
  handleSetting (e) {
   this.props.actions.changeLevel(e.target.value) // change level
   // reset game with new level
   this.props.actions.resetGame()
  }
  render () {
    const options = ['Easy', 'Medium', 'Hard']
    return (
      <select multiple={true} defaultValue={options} onChange={this.handleSetting.bind(this)}>
        <Option value='Easy' />
        <Option value='Medium' />
        <Option value='Hard' />
      </select>
    )
  }
}

const mapStateToProps = (state) => {
  return state
} // don't really need this yet..

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(tileActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
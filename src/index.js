import React from 'react'
import ReactDOM from 'react-DOM'
import { Provider } from 'react-redux'
import store from './store/store'
import MemoryBoard from './MemoryBoard'
import Settings from './Settings'

const App = (props) =>
  <div>Hi {props.name}
    <Settings />
    <MemoryBoard />
  </div>

window.store = store

ReactDOM.render(
  <Provider store={store}>
    <App name="Person"/>
  </Provider>, document.getElementById('app'))
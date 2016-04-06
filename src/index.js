import React from 'react'
import ReactDOM from 'react-DOM'
import { Provider } from 'react-redux'
import store from './store/store'
import MemoryBoard from './MemoryBoard'
import Settings from './Settings'

const App = () =>
  <div>
    <Settings />
    <MemoryBoard />
  </div>

window.store = store

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('app'))
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/index.css'
import * as serviceWorker from './serviceWorker'
import { store } from './reducers/index'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
)

serviceWorker.unregister()

import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import 'mobx-react-lite/batchingForReactDom'

ReactDOM.render(
  (
    <BrowserRouter>
        <App />
    </BrowserRouter>
  ),
  document.getElementById('root')
)

serviceWorker.unregister()

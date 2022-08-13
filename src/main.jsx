import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from "react-router-dom"
import { store } from './assets/store'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { getSchedules } from './assets/slice'
store.dispatch(getSchedules())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)

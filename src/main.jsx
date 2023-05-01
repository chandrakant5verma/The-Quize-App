import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './style/index.css'
import store from './Redux/store.jsx'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Landing from './components/Landing.jsx'
import Store from './components/Store.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Store /> */}
    <Landing />
  </React.StrictMode>,
)

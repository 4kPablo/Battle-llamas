import React from 'react'
import ReactDOM from 'react-dom/client'
import Landing from './components/landing/Landing.jsx'
import Store from './components/store/Store.jsx'
import Login from './components/login/Login.jsx'
import Navbar from './components/Navbar'
import './main.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

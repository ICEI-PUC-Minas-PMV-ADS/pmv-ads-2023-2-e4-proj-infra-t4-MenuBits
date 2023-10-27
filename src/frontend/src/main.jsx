import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/Homepage'
import About from './pages/About'
import RestaurantHomePage from './pages/RestaurantHomePage'
import MenuEditor from './pages/MenuEditor'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
          {/* Cliente */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />


          {/* Restaurante */}
          <Route path="/menu-editor" element={<MenuEditor />} />
          <Route path="/restaurant-homepage" element={<RestaurantHomePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

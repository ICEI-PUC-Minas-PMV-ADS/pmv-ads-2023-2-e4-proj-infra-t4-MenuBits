import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import HomePage from './pages/Homepage'
import MenuEditor from './pages/MenuEditor'
import RegistryPage from './pages/RegistryPage'
import RestaurantHomePage from './pages/RestaurantHomePage'
import './styles/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <BrowserRouter>
      <Routes>
          {/* Cliente */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/register-client" element={<RegistryPage />} />
          <Route path="/register-restaurant" element={<RegistryPage  />} />


          {/* Restaurante */}
          <Route path="/menu-editor" element={<MenuEditor />} />
          <Route path="/restaurant-homepage" element={<RestaurantHomePage />} />
      </Routes>
    </BrowserRouter>
  </>,
)

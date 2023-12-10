import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import HomePage from './pages/Homepage'
import MenuEditor from './pages/MenuEditor'
import MenuPage from './pages/MenuPage'
import RegisterPage from './pages/RegisterPage'
import RestaurantHomePage from './pages/RestaurantHomePage'
import MeusPedidos from "./pages/pedidos"
import PerfilUser from "../src/pages/Perfilpages/PerfilUser"
import EditPerfilUser from "../src/pages/Perfilpages/EditPerfilUser"
import PerfilRestaurant from "../src/pages/Perfilpages/PerfilRestaurant"
import EditPerfilRestaurant from "../src/pages/Perfilpages/EditPerfilRestaurant"
import './styles/index.css'
import LoginPage from "./pages/LoginPage";


// adicionar /:menuId? no menu-page e pegar por useParams
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/register-client" element={<RegisterPage profile='client' />} />
        <Route path="/register-restaurant" element={<RegisterPage profile='restaurant' />} />
        <Route path='/menu-page/:menuId?' element={<MenuPage />} />
        <Route path="/order" element={<MeusPedidos />} />
        <Route path="/login-client" element={<LoginPage profile='client' />} />
        <Route path="/login-restaurant" element={<LoginPage profile='restaurant' />} />
        <Route path="/menu-editor" element={<MenuEditor />} />
        <Route path="/restaurant-homepage" element={<RestaurantHomePage />} />
        <Route path="/perfil-user" element={<PerfilUser />} />
        <Route path="/edit-perfil-user" element={<EditPerfilUser />} />
        <Route path="/perfil-restaurant" element={<PerfilRestaurant />} />
        <Route path="/edit-perfil-restaurant" element={<EditPerfilRestaurant />} />
      </Routes>
    </BrowserRouter>
  </>
);
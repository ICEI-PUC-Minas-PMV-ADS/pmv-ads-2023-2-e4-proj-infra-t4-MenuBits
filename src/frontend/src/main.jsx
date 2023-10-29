import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import About from "./pages/About";
import RestaurantHomePage from "./pages/RestaurantHomePage";
import MenuEditor from "./pages/MenuEditor";
import MeusPedidos from "./pages/pedidos";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        {/* Cliente */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />

        <Route path="/order" element={<MeusPedidos />} />

        {/* Restaurante */}
        <Route path="/menu-editor" element={<MenuEditor />} />
        <Route path="/restaurant-homepage" element={<RestaurantHomePage />} />
      </Routes>
    </BrowserRouter>
  </>
);

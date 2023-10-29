import { UserCircle2 } from 'lucide-react';
import './style.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className='links'>
          <a href="/">
            <img src="/logo.png" alt="Logo" />
          </a>

            <a href="/">
              Início
            </a>

            <a href="/">
              Favoritos
            </a>
            <a href="/cardapios">
              Cardapios
            </a>
            <a href="/restaurant-homepage">
              Meu Restaurante
            </a>

            <a href="/menu-editor">
              Últimos acessos
            </a>
            
            <a href="/about">
              Sobre
            </a>
        </div>

        <UserCircle2 size={48}/>
      </div>
    </nav>
  );
}

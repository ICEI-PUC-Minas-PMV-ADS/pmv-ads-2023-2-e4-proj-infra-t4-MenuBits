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
              Inicio
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

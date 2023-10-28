import { Button } from "../../components/Buttons";
import './style.css';
import { LoginEnter } from './syles';

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
        <div>
            <LoginEnter href="/registry-client">
              Criar Conta
            </LoginEnter>
            <Button $variant="secondary">
                <a href="/login">
                Entrar
                </a>
            </Button>
          {/* <UserCircle2 size={48}/> */}
        </div>
      </div>

    </nav>
  );
}

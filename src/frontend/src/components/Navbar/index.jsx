import { Button } from "../../components/Buttons";
import './style.css';

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
        <LoginArea>
          <Button $variant="secondary">
              <a href="/about">
              Entrar
              </a>
          </Button>
          <a href="/menu-editor">
            Criar Conta
          </a>
        {/* <UserCircle2 size={48}/> */}
        </div>
      </LoginArea>
    </nav>
  );
}

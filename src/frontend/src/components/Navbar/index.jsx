import Logo from '../../assets/logo.png';
import { Button } from "../../components/Buttons";
import './style.css';
import { LoginArea, LoginEnter } from './syles';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className='links'>
          <a href="/">
            <img src={Logo} alt="Logo" />
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
        <LoginArea>
            <LoginEnter href="/register-client">
              Criar Conta
            </LoginEnter>
            <Button $variant="secondary">
                <a href="/">
                Entrar
                </a>
            </Button>
          {/* <UserCircle2 size={48}/> */}
          </LoginArea>

        </div>

    </nav>
  );
}

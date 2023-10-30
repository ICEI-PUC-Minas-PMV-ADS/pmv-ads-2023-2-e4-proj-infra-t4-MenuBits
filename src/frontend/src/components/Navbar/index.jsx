import { useState } from 'react';
import Logo from '../../assets/logo.png';
import { Button } from "../../components/Buttons";
import './style.css';
import { LoginArea, LoginEnter } from './syles';
import { UserCircle2 } from 'lucide-react';

export default function Navbar() {

  const [userVision, setUserVision] = useState(true)
  const [userAuth, setUserAuth] = useState(true)

  

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

                <a href="/order">
                  Meus pedidos
                </a>

                <a href="/menu-page">
                  Cardápios
                </a>

                <a href="/restaurant-homepage">
                  Visão do restaurante
                </a>

                <a href="/menu-editor">
                  Editor de cardápio
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
                  <a href="/login-client">
                    Entrar
                  </a>
                </Button>

                
            <a href="perfil-user">
              <UserCircle2 size={48} />
            </a>

        </LoginArea>


      </div>

    </nav>
  );
}

import React from 'react';
import './Header.css'
// import { Link } from 'react-router-dom';
// Usando o de baixo ao invés do de cima, mostra a página que está ativa no momento
import { NavLink, useLocation } from 'react-router-dom';


const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    // console.log('Mudou a rota');
  }, [location])
  // Este pode ser usado por exemplo no google analytics, para mostrar o usuario entrou e depois foi pra lá

  return (
    <nav>
      <NavLink to="/" end> 
      {/* O end vai dizer que é final na home */}
        Home
      </NavLink>{' '}
      |{' '}
       <NavLink to="sobre">
          Sobre
        </NavLink>{' '}
      |{' '}
      <NavLink to="login">Login</NavLink>
    </nav>
  )
}

export default Header
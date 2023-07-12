import React from 'react';
import './Header.css'
// import { Link } from 'react-router-dom';
// Usando o de baixo ao invés do de cima, mostra a página que está ativa no momento
import { NavLink } from 'react-router-dom';


const Header = () => {
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
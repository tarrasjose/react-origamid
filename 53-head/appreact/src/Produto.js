import React from 'react'
import { NavLink, useParams, Outlet } from 'react-router-dom'
import Head from './Head';


const Produto = () => {
  const params = useParams();
  // console.log(params);

  return (
    <div>
      <Head title="Produto" description="Essa é a descrição de produto" />
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descricao</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink> 
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default Produto
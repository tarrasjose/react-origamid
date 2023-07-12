import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Origamid | Home</title>
        <meta name="description" content="Essa é a descrição da Home" />
      </Helmet>
      
      <h1>Home</h1>
      <p>Essa é a home</p>
      <Link to="produto/notebook">Notebook</Link>{' '}
      <Link to="produto/smartphone">Smartphone</Link>
    </div>
  )
}

export default Home
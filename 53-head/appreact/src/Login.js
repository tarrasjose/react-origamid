import React from 'react'
import { useNavigate } from 'react-router-dom';
import Head from './Head';

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    console.log('simulação que fez login');
    navigate('/sobre');
  }

  return (
    <div>
      <Head title="Login" description="Essa é a descrição do login" />
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login
// import React, { Fragment } from 'react';
// Usando { Fragment} Podemos escrever Fragment direto ao invés de React.Fragment, mas vamos usar React normal
import React from 'react';
import Header from './Header'
import Footer from './Footer';
import Form from './Form/Form';

const Teste = () => {
  const active = false;

  if(active) {
    return <p>Teste</p>
  } else {
    return null;
  }
}

const App = () => {
  return (
    <React.Fragment>
      <Teste />
      <Header />
      <Form />
      <Footer />
    </React.Fragment>);
};

export default App;

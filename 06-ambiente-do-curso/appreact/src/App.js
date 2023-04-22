import React from "react";

// JSX 1

// const App = () => {
//   return (
//   <a className="ativo" href="https://origamid.com" title="Site de cursos">
//   Origamid
//   </a>
//   );
// };

// const App = () => {
//   return (
//     <React.Fragment>
//       <label htmlFor="nome">Nome</label>
//       <input type="text" id="nome"/>
//     </React.Fragment>
//     // Se não envolver no React.Fragment não irá funcionar
//     // Se tivesse envolvido numa div, iria criar mais uma div
//     // criando div dentro div, gerando um lixo a mais
//   );
// };

// const App = () => {
//   return (
//     <>
//       <label htmlFor="nome">Nome</label>
//       <input type="text" id="nome"/>
//     </>
//     // Existe esta sintaxe diferente do React.Fragment
//   );
// };

// const App = () => {
//   return <video autoPlay />;
//   // autoplay no html é tudo letra minuscula e aqui é camelCase
// };

// const App = () => {
//   const nome = 'André';
//   return (
//     <p>{nome}</p>
//   );
// };

const titulo = <h1>Esse é um titulo</h1>

const App = () => {
  const random = Math.random();
  const ativo = true;
  
  function mostrarNome(sobrenome) {
    return ' André ' + sobrenome;
  }
  
  const carro = {
    marca: 'Ford',
    rodas: '4',
  }
  
  const estiloP = {
    color: "blue",
    fontSize: '5rem',
  }
  
  return (
    <>
    {titulo}

    <p>
      {true ? 'sim' : 'não'} - {10}
      {mostrarNome('Rafael')} 
    </p>

    <p style={estiloP}>{new Date().getFullYear()}</p>

    <p>{carro.marca}</p>
    <p>{carro.rodas}</p>

    <p className={ativo ? 'ativo' : 'inativo'}>{random * 100}</p>
    </>
  )
}




export default App;

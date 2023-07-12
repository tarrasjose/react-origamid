import React from 'react';
// import UserContext from './UserContext';
import { GlobalContext } from './GlobalContext';

// const Produto = () => {
  // const dados = React.useContext(UserContext);
  // console.log(dados);

  // return (
  //   <div>{dados.nome}</div>
  // )
// }

//////////////////////////////////////

const Produto = () => {
  const global = React.useContext(GlobalContext);
  // console.log(global);

  return (
    <div>
      Produto: {global.contar} <button onClick={() => global.adicionarUm()}>Adicionar</button>
    </div>
    
  ) 
}

export default Produto;
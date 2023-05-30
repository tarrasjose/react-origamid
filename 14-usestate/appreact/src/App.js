import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

// const App = () => {
//   const ativo = true;
//   return <button>{ativo? 'Ativo' : 'Inativo'}</button>
// };

//////////////////////////

// disable
// const App = () => {
//   const ativo = false;
//   return <button disabled={!ativo}>{ativo? 'Ativo' : 'Inativo'}</button>
// };

///////////////////////////

// const App = () => {
//   const ativoHook = React.useState(false);
//   console.log(ativoHook);
//   const ativoValor = ativoHook[0];
//   const atualizaValor = ativoHook[1];
//   console.log(ativoValor);

//   function handleClick() {
//     atualizaValor(!ativoValor)
//   }

//   return <button onClick={handleClick}>{ativoValor ? 'Ativo' : 'Inativo'}</button>;

// };

////////////////////////
// Mas na verdade vamos usar assim:
// const App = () => {
//   const [ativo, setAtivo] = React.useState(false);
//   console.log([ativo, setAtivo]);

//   function handleClick() {
//     setAtivo(!ativo);
//   }

//   return <button onClick={ handleClick }>{ ativo ? 'Ativo' : 'Inativo' }</button>
// };

//////////////////////////////////
// Múltiplos Estados
// const App = () => {
//   const [ativo, setAtivo] = React.useState(false);
//   console.log([ativo, setAtivo]);
//   const [dados, setDados] = React.useState({ nome: 'André', idade: '30'})

//   function handleClick() {
//     setAtivo(!ativo);
//     setDados({...dados, faculdade: 'Possui faculdade'})
//   }

//   return (
//       <div>
//       <p>{dados.nome}</p>
//       <p>{dados.idade}</p>
//       <p>{dados.faculdade}</p>
//       <button onClick={ handleClick }>{ ativo ? 'Ativo' : 'Inativo' }</button>
//     </div>
    
//   )
// };

const App = () => {
  const [modal,setModal] = React.useState(false);

  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={ setModal }/>
    </div>
    
  )
};




export default App;

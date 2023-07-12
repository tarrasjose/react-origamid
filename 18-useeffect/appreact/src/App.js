import React from "react";
import Produto from "./Produto";

// const App = () => {
//   const [contar, setContar] = React.useState(0);
//   // console.log('Executou fora');
//   React.useEffect(() => {
//     console.log('Executou');
//   }, []); // Pode ser utilizado para puxar produtos, puxando eles uma única vez

//   React.useEffect(() => {
//     document.title = 'Total ' + contar;
//   }, [contar]);

//   return <button onClick={() => setContar(contar + 1)}>{contar}</button>
// };


////////////////////////////

// const App = () => {
//   const [contar, setContar] = React.useState(0);
//   const [dados, setDados] = React.useState(null);

//   React.useEffect(() => {
//     fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
//       .then((response) => response.json())
//       .then((json) => setDados(json));
//   },[])

//   return (
//     <div>
//       {dados && (
//         <div>
//           <h1>{dados.nome}</h1>
//           <p>R$ {dados.preco * contar}</p>
//           {/* <img src={dados.fotos[0].src} alt="" /> */}
//         </div>
//       )}

//     <button onClick={() => setContar(contar + 1)}>{contar}</button> 
//     </div>
//   )
// };


const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
    {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  )
};


export default App;

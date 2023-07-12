import React from "react";
import Produto from "./Produto";

// const App = () => {
//   const [produto, setProduto] = React.useState(null);

// // Este pega o que foi salvo no localStorage
//   React.useEffect(() => {
//     const produtoLocal = window.localStorage.getItem('produto');
//     if (produtoLocal !== null) {
//       // console.log(produtoLocal);
//       setProduto(produtoLocal);  
//     }               
//   }, [])

// // Este salva no localStorage 
//   React.useEffect(() => {
//     if(produto !== null) window.localStorage.setItem('produto', produto);
//   }, [produto]);
//   // Sempre que produto for modificado, eu quero que esse efeito ocorra, salva no localStorage

//   function handleClick({ target }) {
//     setProduto(target.innerText);
//   }
 
//   return (
//   <div>
//     <h1>Preferência: {produto}</h1>
//     <button onClick={handleClick} style={{marginRight: '1rem'}}>notebook</button>
//     <button onClick={handleClick}>smartphone</button>
//     <Produto produto={produto} />
//   </div>
//   );
// };

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, [])

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto)
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick} style={{marginRight: '1rem'}}>notebook</button>
      <button onClick={handleClick}>smartphone</button>

      <Produto produto={produto} />
    </div>
  )
}

export default App;

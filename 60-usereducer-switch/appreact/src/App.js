import React from "react";
import Exemplo from "./Exemplo";

function reducer(state, action) {
  // console.log(action);
  switch (action) {
    case 'AUMENTAR':
      return state + 1;
    case 'DIMINUIR':
      return state - 1;
    default: 
      throw new Error();
      // Não precisa sempre usar erro aqui, poderia voltar o estado puro um padrao, só foi usado como se quisesse somente somar e diminuir 1
  }

}
const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0)

  return (
    <div>
      {/* <button onClick={aumentar}>+</button>{' '}
      <button onClick={diminuir}>-</button> */}
      {/* <p>{contar}</p> */}

      <button onClick={() => dispatch('AUMENTAR')}>+</button>
      <button onClick={() => dispatch('DIMINUIR')}>-</button>
      <p>{state}</p>
      <Exemplo />
    </div>
  )
};

export default App;

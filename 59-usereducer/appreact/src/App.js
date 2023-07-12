import React from "react";

const App = () => {
  // Ao invés disso tudo comentado
  // const [contar, setContar] = React.useState(0);
  // function aumentar() {
  //   setContar(contar + 1);
  // }
  // function diminuir() {
  //   setContar(contar - 1);
  // }

  function reducer(state, action) {
    console.log(action);
    if (action === 'aumentar') {
      return state + 1;
    }

    if (action === 'diminuir') {
      return state - 1;
    }

    return new Error('Error action não existe')
  }

  const [state, dispatch] = React.useReducer(reducer, 0)

  return (
    <div>
      {/* <button onClick={aumentar}>+</button>{' '}
      <button onClick={diminuir}>-</button> */}
      {/* <p>{contar}</p> */}

      <button onClick={() => dispatch('aumentar')}>+</button>
      <button onClick={() => dispatch('diminuir')}>-</button>
      <p>{state}</p>
    </div>
  )
};

export default App;

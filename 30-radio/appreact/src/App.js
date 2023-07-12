import React from "react";

const App = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  function handleChange({target}) {
    setProduto(target.value);
  }

  return (
    <form>
      <h2>Cores</h2>
      <label>
        <input 
        type="radio"
        onChange={({target}) => setCor(target.value)}
        checked={cor === 'azul'} //Existe esta forma de criar grupos e a outra
        value="azul"
        />
        Azul
      </label>
      <label>
        <input 
        type="radio"
        onChange={({target}) => setCor(target.value)}
        checked={cor === 'vermelho'}
        value="vermelho" 
        />
        Vermelho
      </label>
      <h2>Produtos</h2>
      <label>
        <input type="radio" 
        onChange={handleChange} 
        name="produto" //existe esta forma de criar grupos e a outra, eu gostei mais desta.
        value="smartphone"
        />
        Smartphone
      </label>
      <label>
        <input type="radio" 
        onChange={handleChange} 
        name="produto" 
        value="notebook" 
        />
        Notebook
      </label>
    </form>
  )
}

export default App;

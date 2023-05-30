import React, {useState} from "react";
// Usando este , {useState} podemos então usar useState() ao invés de React.useState, o professor não gosta de usar, pois se por algum motivo ele decide não usar mais o useState, ele ficará aparecendo no import, o eslint mostrando que importou e não está usando, aí a gente exlcui, e de repente decide utilizar outra vez, volta e coloca outra vez, e fica nisso toda hora

const App = () => {
  const [contar, setContar] = useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    setContar((contar) => {
      // setItems((items) => [...items, 'Item ' + (contar + 1)]); // para funcionar temos que tirar lá no index.js o StrictMode e então ele adicionará de um em um, só que está errado, temos que tirar ela daqui
      return contar + 1;
    })
    setItems((items) => [...items, 'Item ' + (contar + 1)]);
  }

  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </div>
  )
};

export default App;

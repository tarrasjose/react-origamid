import React from "react";

// Usar esta lista de array
const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const App = () => {
  const [cores, setCores] = React.useState(['azul']);
  // Neste caso já vem selecionado o azul

  function handleChange({target}) {
    // console.log(target);
    if (target.checked) {
      setCores([...cores, target.value])
    } else {
      setCores(
        cores.filter((cor) => {
          console.log(cor);
          return cor !== target.value;
        })
      )
    }
  } 
  console.log(cores);

  // function checkColor(cor) {
  //   // Vai verificar se já está incluso a cor para casos que estão marcados desde o inicio
  //   return cores.includes(cor);
  // }

  return (
  
    <form>
      {coresArray.map((cor) => (
        // Se tivesse valor repetido na array poderia então usar o index na key
        <label key={cor} style={{textTransform: 'capitalize'}}>
          {/* Capitalize sempre transforma a primeira letra em maiuscula */}
          <input 
          type="checkbox"
          value={cor}
          // checked={checkColor('azul')}
          checked={cores.includes(cor)}
          onChange={handleChange}
          />
          {cor}
        </label>
      ))}
    </form>
  )
};

export default App;

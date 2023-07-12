import React from "react";

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
      <label>
        <input 
        type="checkbox"
        value="azul"
        // checked={checkColor('azul')}
        checked={cores.includes('azul')}
        onChange={handleChange}
        />
        Azul
      </label>

      <label>
        <input 
        type="checkbox"
        value="vermelho"
        // checked={checkColor('vermelho')}
        checked={cores.includes('vermelho')}
        onChange={handleChange}
        />
        Vermelho
      </label>
    </form>
  )
};

export default App;

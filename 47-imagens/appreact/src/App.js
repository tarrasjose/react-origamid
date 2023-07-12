import React from "react";
import './App.css';
import foto from './img/foto.jpg';
// import {ReactComponent as Dog} from './img/dog.svg';
import DogSvg from "./DogSvg";

const App = () => {
  const [olho, setOlho] = React.useState(2);

  function handleClick() {
    for(let i = 0; i < 4; i++) {
      setTimeout(() => {
        setOlho(i);
      }, 30 * i)
    }
  }

  return (
    <div>
      <p onClick={handleClick} className="fundo"></p>
      <DogSvg color="#84e" olho={olho} />
      <img src={foto} alt="Cachorro" />
    </div>
  )
};

export default App;

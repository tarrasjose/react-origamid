import ReactDOM from "react-dom";
import React from "react";
import App from "./App";


// ReactDOM.render(App(), document.getElementById('root'));
// Depois de instalar o babel podemos fazer assim:
ReactDOM.render(<App />, document.getElementById('root'));
// obs: Precisa importar o React from 'react' como está lá em cima
// Se não colocar assim, não funcionará
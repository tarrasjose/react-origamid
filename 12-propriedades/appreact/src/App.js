import React from "react";
import Form from "./Form/Form";

// const Titulo = (props) => {
//   return <h1 style={{ color: props.cor }}>{ props.texto }</h1>
// }

// const App = () => {
//   return (
//     <div>
//       <Titulo cor="blue" texto="Meu título 1" />
//       <Titulo texto="Meu título 2" />
//     </div>
//   )
// };

/////////////////////////////////////////////////
// Aqui já desestrutura antes

// const Titulo = ({ cor, texto }) => {
//   return <h1 style={{ color: cor }}>{ texto }</h1>
// }

// const App = () => {
//   return (
//     <div>
//       <Titulo cor="blue" texto="Meu título 1" />
//       <Titulo texto="Meu título 2" />
//     </div>
//   )
// };

// export default App;

/////////////////////////////////////////
// children

// const Titulo = ({ cor, texto, children }) => {
//   return (
//   <h1 style={{ color: cor }}>
//     { texto }, { children }
//   </h1>
//   );
// }

// const App = () => {
//   return (
//     <div>
//       <Titulo cor="blue" texto="Meu título 1"> Isso é o children </Titulo>
//       <Titulo texto="Meu título 2" />
//     </div>
//   )
// };

// export default App;

// Próximo exemplo na pasta Form

const App = () => {
  return (
    <div>
      <Form />
    </div>
  )
};

export default App;

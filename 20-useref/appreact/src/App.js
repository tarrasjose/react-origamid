import React from "react";

// const App = () => {
//   const video = React.useRef();

//   React.useEffect(() => {
//     console.log(video.current);
//     console.log(video.current.currentTime);
//   })


//   return <video ref={video} />
// };

/////////////////////////
// Exemplo mais real colocando comentários

// const App = () => {
//   const [comentarios, setComentarios] = React.useState(['comentario 1', 'comentario 2']);
//   const [input, setInput] = React.useState('');
//   const inputElement = React.useRef(); // para colocarmos focus no input

//   function handleClick() {
//     setComentarios([...comentarios, input]);
//     setInput(''); //limpa o input
//     inputElement.current.focus(); // para colocarmos focus no input
//   }

//   return (
//     <div>
//       <ul>
//         {comentarios.map((comentario) => (
//           <li key={comentario}>{comentario}</li>
//         ))}
//       </ul>

//       <input style={{marginBottom: '1rem'}}
//         type="text"
//         ref={inputElement} // para colocarmos focus no input
//         value={input}
//         onChange={({ target }) => setInput(target.value)}
//       />

//       <button onClick={handleClick}>Enviar</button>
//     </div>
//   )
// }

///////////////////////////////////////////////////////
//Exemplo real adicionar no carrinho

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

function handleClick() {
  setCarrinho(carrinho + 1)
  setNotificacao('Item adicionado ao carrinho');

  clearTimeout(timeoutRef.current);
  timeoutRef.current = setTimeout(() => {
    setNotificacao(null);
  }, 2000);
}


  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar no carrinho {carrinho}</button>    
    </div>
  )
}


export default App;

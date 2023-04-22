import React from "react";

// const App = () => {
//   function handleClick(event) {
//     console.log(event);
//     console.log(event.target);
//   }

//   return <button onClick={handleClick} onMouseLeave={handleClick}>Clique</button>
// };

//////////////////////////////////////////////
// função junto ao invés de separada

// const App = () => {
//   return <button onClick={ (event) => alert(event.target.innerText) }>Clique</button>
// };

/////////////////////////////////////////////////////
// scroll

const App = () => {
  function handleScroll(event) {
    console.log(event);
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <div style={{height: '200vh'}}>
      <button>Clique</button>
    </div>
  ) 
};

export default App;

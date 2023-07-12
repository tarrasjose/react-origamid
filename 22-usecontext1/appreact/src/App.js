import React from "react";
// import UserContext from "./UserContext";
import Produto from "./Produto";
import { GlobalStorage } from "./GlobalContext";

// const App = () => {
//   return (
//     <UserContext.Provider value={{nome: "André"}}>
//       <Produto />
//     </UserContext.Provider>
//   );
// };

//////////////////////////////////////////

const App = () => {
  return (
    <GlobalStorage>
      <Produto/>
    </GlobalStorage>
  )
}

export default App;

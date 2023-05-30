import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Tirando o StrictMode o item será adicionado de um em um não dando erro de adicionar mais de um, só que está errado, volta no app.js que corrigimos
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



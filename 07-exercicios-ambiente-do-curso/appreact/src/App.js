import React from "react";

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};



const App = () => {
  const dados = luana;
  
  const total = dados.compras.map((item) => {
    return Number(item.preco.replace('R$ ', ''));
  }).reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual;
  })
  // Se retornasse na mesma linha não precisaria usar return
  // console.log(total);
  
  return <div>
    <p>Nome: {dados.cliente} </p>
    <p>Idade: {dados.idade}</p>
    <p>
      Situação: <span style={{color: dados.ativa ? 'green' : 'red'}}>{dados.ativa ? 'Ativa' : 'Inativa'}</span>
    </p>
    <p>Total gasto: R$ {total}</p>
    {/* <p>{total > 10000 ? 'Você está gastando muito.' : ''}</p> */}
    {/* Ao invés de usar o de acima, melhor usar o && para não ficar uma string vazia */}
    {total > 10000 && <p>Você está gastando muito.</p>}
    {/* Podemos usar o <p> dentro para ser gerado somente se for verdadeiro e não gerar ele sempre */}
  </div>;
};

export default App;

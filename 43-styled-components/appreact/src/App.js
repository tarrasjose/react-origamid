import React from "react";
import styled from 'styled-components';

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`;

const Paragrafo = styled.p`
  color: blue;
`;

const Preco = styled.p`
  background: ${({cor}) => cor};
  color: white;
`;

// const Preco = styled.p`
//   background: hsl(${Math.random() * 360}, 100%, 50%);
//   color: white;
// `;
// // usando javascript para mudar a cor toda vez que a página atualizar

const Comprar = styled.button`
  background: ${({ativo}) => (ativo ? '#000' : 'red')};
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  color: ${({ativo}) => (ativo ? 'yellow' : 'white')};
  cursor: pointer;
  &:hover {
    background: gray;
  }
`;

const App = () => {

  // function template(value, total) {
  //   console.log(value);
  //   console.log(total);
  // } 
  // const total = 1000;
  // template`Isso é ${total} um teste`

  const [ativo, setAtivo] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo)
  }

  return (
    <div>
      <ProdutosContainer>

        <Produto>
          <Comprar ativo={ativo} onClick={handleClick}>Compre Aqui</Comprar>
          <Titulo>Notebook</Titulo>
          <Paragrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non a facilis amet doloribus quisquam, consequuntur facere hic! Quas blanditiis sequi expedita architecto. Veritatis iste cupiditate tempora beatae hic qui odio.</Paragrafo>
          <Preco cor="#84e">R$ 2000</Preco>
        </Produto>

        <Produto>
          <Comprar>Compre aqui</Comprar>
          <Titulo>smartphone</Titulo>
          <Paragrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non a facilis amet doloribus quisquam, consequuntur facere hic! Quas blanditiis sequi expedita architecto. Veritatis iste cupiditate tempora beatae hic qui odio.</Paragrafo>
          <Preco cor="#53d956">R$ 1000</Preco>
        </Produto>

      </ProdutosContainer>
    </div>
  )
};

export default App;

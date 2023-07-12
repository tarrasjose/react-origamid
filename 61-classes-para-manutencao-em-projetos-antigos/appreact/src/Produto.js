import React from 'react';

class Produtos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('Montou agora');
    // ideal para fazer o fetch uma vez e pronto
  }

  componentDidUpdate() {
    // Toda vez que renderizar novamente atualiza esta função aqui
    document.title = this.state.contar;
  }

  componentWillUnmount() {
    // Acontece antes do componenete sair da tela
    console.log('Saiu da tela');
  }

  handleClick() {
    this.setState((state) => ({contar: state.contar + 1}))
  }

  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.state.contar}</p>
        <button 
          onClick={this.handleClick}
        >
          Adicionar
        </button>
      </div>
    )
  }
}
export default Produtos;
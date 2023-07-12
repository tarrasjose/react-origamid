import React from "react";
import Input from './Form/Input'


const App = () => {
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      // ! pra dizer se isso for falso
      setError('Preencha um CEP válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    // console.log(validateCep(target.value));
    validateCep(target.value);

    // console.log(target.value);
    //^tem que começar com| \d{5}=5 digitos | -?=-opcional | \d{3}= 3 digitos |$termina nos 3 digitos
    // const regex = /^\d{5}-?\d{3}$/;
    // const validacao = regex.test(target.value);
    // console.log(validacao);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateCep(cep)) {
      console.log('Enviou');
      // Lembrando no mundo real se validou, tinha que fazer o fetch enviando para o servidor
    } else {
      console.log('Não enviou');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP" 
        id="cep" 
        type="text" 
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="00000-000" 
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  )
};

export default App;

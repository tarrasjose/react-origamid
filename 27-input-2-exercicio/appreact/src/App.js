import React from "react";

// automatizar
const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text'
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email'
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password'
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text'
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text'
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text'
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text'
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text'
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text'
  }
];

const App = () => {
  // const [form, setForm] = React.useState({
  //   nome: '',
  //   email: '',
  //   senha: '',
  //   cep: '',
  //   rua: '',
  //   numero: '',
  //   bairro: '',
  //   cidade: '',
  //   estado: '',
  // });
  // Podemos fazer assim para evitar erro humado, equivale o de cima e quando adicionar qualquer campo novo no formFields já vai adicionar automaticamente aqui
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      console.log(acc);
      return {
        ...acc,
        [field.id]: '',
      };
    }, {}),
  );

  const [response, setReponse] = React.useState(null);

  function handleChange({ target }) {
    const {id, value} = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    .then((response) => {
      setReponse(response)
    });
  }
  
  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
        </div>
      ))}
      {response && response.ok && <p>Formulário Enviado</p>}
      <button>Enviar</button>
    </form>
  )
};

export default App;

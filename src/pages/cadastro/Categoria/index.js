import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#FF0000',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor
    });
  }

  function handleChange(infoDoEvento) {

    const { getAttribute, value } = infoDoEvento.target
    setValue(
      getAttribute('name'), 
      value);
  }

  return (
    <PageDefault>
    <h1>Cadastro de Categoria: {values.nome} </h1>

    <form onSubmit={ function handleSubmit(infoDoEnvento) {
      infoDoEnvento.preventDefault();
      setCategorias([
        ...categorias,
        values
      ]);

      setValues(valoresIniciais);
    }}>
      
      <FormField
        label="Nome da Categoria: "
        type="text"
        name="nome"
        value={values.nome}
        onChange={handleChange}
      />
      
      <FormField
        label="Descrição: "
        type="multiline"
        name="descricao"
        value={values.descricao}
        onChange={handleChange}
      />

      <FormField
        label="Cor: "
        type="color"
        name="cor"
        value={values.cor}
        onChange={handleChange}
      />

      <button>
        Cadastrar
      </button>
    </form>
    
    <ul>
      {categorias.map( (categoria, indice) => {

        return (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        )
      })}
    </ul>

    <Link to="/">
      Ir para home
    </Link>
  </PageDefault>
  );
}

export default CadastroCategoria;
import React, { useState } from 'react';

import Buttons from '../../components/Buttons';

function Admin() {
  const [nome, setNome] = useState('Lucas Coronel');
  const [dtNascimento, setdtNascimento] = useState('02/05/1997');
  const [idade, setIdade] = useState(23);
  const [rua, setRua] = useState('Capão Redondo');
  const [numero, setNumero] = useState(200);

  return (
    <>
      <p>
        Nome =
        {nome}
      </p>
      <p>
        Data Nascimento =
        {' '}
        {dtNascimento}
      </p>
      <p>
        Idade =
        {' '}
        {idade}
      </p>
      <Buttons onClick={() => { setIdade((valor) => 1 + valor); }} label="Add" />
      <Buttons onClick={() => { setIdade(idade - 1); }} label="Subtrair" />
      <p>
        Rua =
        {' '}
        {rua}
      </p>
      <p>
        Numero =
        {' '}
        {numero}
      </p>
      <Buttons onClick={() => { setNumero(numero + 1); }} label="add" />
      <Buttons onClick={() => { setNumero(numero - 1); }} label="Subtrair" />

      <br />
      <br />
      <br />
      <Buttons
        onClick={() => {
          setNome('Gabriel');
          setdtNascimento('22/04/1998');
          setIdade(22);
          setRua('Mancio Lima');
          setNumero(75);
        }}
        label="Mudar"
      />

    </>

  );
}

export default Admin;

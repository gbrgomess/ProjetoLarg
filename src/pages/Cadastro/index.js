import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import Input from '../../components/Input';
import Buttons from '../../components/Buttons';

function Cadastro() {
  const { push } = useHistory('');
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [dtNascimento, setdtNascimento] = useState('');
  const [rua, setRua] = useState('');
  const [numCasa, setnumCasa] = useState('');

  function cadastrar() {
    nome !== '' && idade !== '' && dtNascimento !== '' && rua !== '' && numCasa !== ''
      ? alert(`Nome:${nome
      }\nIdade: ${idade
      }\n Data de Nascimento: ${dtNascimento
      }\n Rua: ${rua
      }\n Nº: ${numCasa}`)

      : alert('Preencha todos os campos ');
  }

  return (
    <Container>
      <Input label="Nome" type="text" value={nome} onChange={(valor) => { setNome(valor.target.value); }} />
      <Input label="Idade" type="number" value={idade} onChange={(valor) => { setIdade(valor.target.value); }} />
      <Input label="Data de Nascimento" type="date" value={dtNascimento} onChange={(valor) => { setdtNascimento(valor.target.value); }} />
      <Input label="Rua" type="text" value={rua} onChange={(valor) => { setRua(valor.target.value); }} />
      <Input label="Número da casa" type="number" value={numCasa} onChange={(valor) => { setnumCasa(valor.target.value); }} />

      <Buttons onClick={cadastrar} label="Cadastrar" />
      <Buttons onClick={() => push('/')} label="Fazer Login" />

    </Container>
  );
}

export default Cadastro;

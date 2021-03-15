import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

import Input from '../../components/Input';
import Buttons from '../../components/Buttons';

function Login() {
  const { push } = useHistory('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const bancodeUsuarios = {
    email: 'switchvarial@hotmail.com',
    password: '1234',
  };
  function handleSignIn() {
    const contentEmail = email.length > 0;
    const contentPassword = email.length > 0;
    if (!contentEmail && !contentPassword) {
      alert('Preencha Email e Senha');
      return;
    }
    const validEmail = email === bancodeUsuarios.email;
    const validPassword = password === bancodeUsuarios.password;

    if (!validEmail && !validPassword) {
      alert('Campos Inválidos');
      return;
    }
    push('/admin');
  }

  return (
    <Container>
      <h1>Login</h1>
      <Input type="text" placeholder="e-mail" value={email} onChange={(valor) => { setEmail(valor.target.value); }} />
      <Input type="password" placeholder="Senha" value={password} onChange={(valor) => { setPassword(valor.target.value); }} />

      <Buttons onClick={handleSignIn} label="Entrar" />
      <Buttons onClick={() => { push('/Cadastro'); }} label="Cadastrar" />

    </Container>
  );
}

export default Login;

import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import { Container } from './styles';

function Login() {
    const{push} = useHistory('');
    const [email,setEmail]=useState('');
    const[senha,setSenha]=useState('');


    const bancodeUsuarios = {
        email:'switchvarial@hotmail.com',
        senha:'1234'
       };
    function logar(){
        let validaremail = false;  
        let validarsenha= false;        
       // Operação Ternaria 
        email=== '' ? alert("Email precisa ser preenchido"): 
        email=== bancodeUsuarios.email ? validaremail=true : alert('email errado');

        senha=== ''? alert("Senha precisa ser preenchida"):
        senha=== bancodeUsuarios.senha ?  validarsenha=true : alert('senha errada'); 

       if(validaremail && validarsenha)
            push("/admin");    
    }

  return (
      <Container>
          <h1>Login</h1>
          <input type="text" 
          placeholder="e-mail" 
          value={email} 
          onChange={(valor)=>{setEmail(valor.target.value)}}
          
          />
          <input type="password" 
          placeholder="Senha" 
          value={senha}
          onChange={(valor)=>{setSenha(valor.target.value)}}
          />

          <button onClick={logar}>Entrar</button>
          <button onClick={()=>{push("/Cadastro")}}>Cadastrar</button>
          
         
      </Container>
  );
}

export default Login;
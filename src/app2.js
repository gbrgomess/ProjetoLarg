import React,{useState} from 'react';
//import {Container,Text} from './styles';
//import {resetCss} from './resetCss';

//import api from './services/api';
function App2() {

  const [nome,setNome] = useState("Lucas Coronel");
  const [dtNascimento,setdtNascimento] = useState("02/05/1997");
  const [idade,setIdade]=useState(23);
  const [rua,setRua]=useState("Capão Redondo");
  const [numero,setNumero]=useState(200);
  
  return (
    <>
        <p>Nome ={nome}</p>
        <p>Data Nascimento = {dtNascimento}</p>
        <p>Idade = {idade}</p>
        <button onClick={()=>{setIdade(valor=> 1 + valor)}}>add</button>
        <button onClick={()=>{setIdade(idade-1)}}>diminuir</button>
        <p>Rua = {rua}</p>        
        <p>Numero = {numero}</p>
        <button onClick={()=>{setNumero(numero+1)}}>add</button>
        <button onClick={()=>{setNumero(numero-1)}}>diminuir</button>

        <br/><br/><br/>
        <button onClick={()=>{
            setNome("Gabriel");
            setdtNascimento("22/04/1998");
            setIdade(22);
            setRua("Mancio Lima");
            setNumero(75);        
        
        }}>Mudar</button>
    </>
  );
}

export default App2;
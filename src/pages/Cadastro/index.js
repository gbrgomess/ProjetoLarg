
import React ,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Container} from './styles';


function Cadastro(){

    const {push} = useHistory('');
    const [nome,setNome]=useState('');
    const [idade,setIdade]=useState('');
    const [dtNascimento,setdtNascimento]=useState('');
    const[rua,setRua]=useState('');
    const[numCasa,setnumCasa]=useState('');    

    function cadastrar(){
        
        nome!== '' && idade!== '' && dtNascimento !== '' && rua !== '' && numCasa!== '' 
            ? 
                alert( "Nome:"+nome+
                "\nIdade: "+idade+
                "\n Data de Nascimento: "+dtNascimento+
                "\n Rua: "+rua+
                "\n Nº: "+numCasa)                

            :
                alert("Preencha todos os campos ")        
    }


    return(
        <Container>
            Nome : <input 
            type="text" 
            value={nome} 
            onChange={(valor)=>{setNome(valor.target.value)}}/>
            Idade: <input 
            type="number" 
            value = {idade} 
            onChange={(valor)=>{setIdade(valor.target.value)}}/>            
            Data de Nascimento : <input 
            type="date" 
            value={dtNascimento} 
            onChange={(valor)=> {setdtNascimento(valor.target.value)}}/>
            Rua : <input 
            type="number" 
            value={rua}
            onChange={(valor)=>{setRua(valor.target.value)}}/>
            Número da casa : <input 
            type="number"
            value={numCasa}
            onChange={(valor)=>{setnumCasa(valor.target.value)}}/>
            <button onClick={cadastrar}>Cadastrar</button>
            <button onClick={()=> push('/')}> Fazer Login </button>
        </Container>      
    )
}

export default Cadastro ;
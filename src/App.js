import React,{useEffect, useState} from 'react';
import {Container,Text} from './styles';
import {resetCss} from './resetCss';

import api from './services/api';
function App() {

  const [nome,setNome] = useState();
  useEffect(()=> [
    api.get('/respo/rocketseat/unform')
    .then(response=>{
      setNome(response.data.name);
    })
    .catch(e=>console.log(e))

  ],[])
  return (
    <>
    <resetCss>
      <Container>
        <div className= "div_nome" id="div">
          <h1>Nome:</h1>
          <p>{nome}</p>
        </div>
        
      </Container>
    </resetCss>
    </>
  );
}

export default App;

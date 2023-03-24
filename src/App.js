import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './styles.css';
import api from './services/api';

function App() {
  /* "input: nome do estado
  setInput: é a função para trocar o valor do estado (passar un valor novo para o estado)
  tudo que for digitado no Input vai ser salvo dentro do estado*/
const[input, setInput] = useState('')

const [cep, setCep] = useState({});

async function handleSearch(){
  //01310930/json
  if(input === ''){
    alert("Preencha algun cep!")
    return;
  }
  try{
const response = await api.get(`${input}/json`);
setCep(response.data)//manda o conteudo para a response
setInput("");

  }catch{
alert("Ops erro ao buscar o cep");// digitou o cep errado
setInput("")//o input volta a ser vazio
  }
}

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite seu cep..." 
        value={input}

        onChange={(e) => setInput(e.target.value)}
        /* onchange recebe a função evento (e) 
        o setinput para o valor para o estado input
        recebe com o target value recebe o que fo inserido no input  */
        />
        <button className="buttonSearch" onClick={handleSearch}> <FiSearch size={25} color="#fff"/>
        </button>
      </div>
{Object.keys(cep).length > 0 && (//só vai mostrar o mais se for informado um valor válido
  <main className='main'>
          <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
)}
 </div>
    
  );
}

export default App;

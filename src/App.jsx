import { useState } from 'react';
import './App.css';
import Entrada from './Entrada.jsx';
import Resultado from './Resultado.jsx';

function App(){
  const [InputValor, setInputValor] = useState("");

  return(
    <div className='App'>
      <Entrada setInputValor={setInputValor}/>
      <Resultado  InputValor={InputValor}/>
    </div>
  );
}

export default App;
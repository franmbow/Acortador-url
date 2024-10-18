import { useState } from 'react';

const Entrada = ({ setInputValor }) => {
const [valor, setValor] = useState("");
const click = () => {setInputValor(valor); setValor("");}
    return (
        <div className="Entrada">
            <h1 className="Titulo">Acortador de links</h1>
            <div>
                <input className="datos"  type="text" placeholder="url" value={valor} onChange={(e) => setValor(e.target.value)}/>
                <button className="button1" type="submit" onClick={click}>Acortar </button>
            </div>
        </div>
    )
}

export default Entrada
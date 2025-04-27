import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import { CopyToClipboard } from "react-copy-to-clipboard";


const Resultado = ({ InputValor }) => {
    const [url, setUrl] = useState("");
    console.log(setUrl);
    const [copied, setCopied] = useState(false);
    const [Cargando, setCargando] = useState(false);

    const fetchDato = async () => {
        try {
            setCargando(true);
            const res = axios.get(`https://api.shrtco.de/v2/shorten?url={InputValor}`);
            setUrl(res.data.result.short_link);
            setCargando(false);
        } catch (error) {
            console.log(error);
        }
        return (
            <div className="Resultado">
                <p>{url}</p>
                <CopyToClipboard text={url} onCopy={() => setCopied(true)}>
                    <button className="button2" type="submit">Copiar</button>
                </CopyToClipboard>
            </div>
        )
    }
    }
    


export default Resultado
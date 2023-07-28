import React, {useEffect, useState} from "react";
import axios from "axios";

export default function listaCarros() {
    const [carros, setCarros] = useState([])

    useEffect(()=>{
        axios.get('retorna-carros.italosoprano.repl.co')
            .then(res=>{
                const dadosCarros = res.data
                setCarros(dadosCarros)
            })
    })
    
    return(
        <>
            {carros.map(
                carro=> <div key={carro.id}>{carro.marca} - {carro.modelo}</div>
            )}
        </>
    )
}
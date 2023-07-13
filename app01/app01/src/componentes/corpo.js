import React from "react";
import Dados from './dados'

export default function Corpo() {
    const nm = 'italo'
    const idd = 28
    const sx = 'Masculino'
    const somar = (n1, n2) =>{
        return n1 + n2
    }
    return(
        <>
        <h2>Titulo</h2>
        <p>texto, texto, texto</p>
        <p>texto, texto, texto</p>
        <Dados 
            nome={nm} 
            idade={idd} 
            sexo={sx}
            somar={somar}
        />
        </>
    )
}
import React from "react";

export default function Resultado(props) {
    return(
        <>
            <p>Soma das Notas:{props.resultadoNotas}</p>
            <p>{props.resultadoNotas >= 60 ? 'aprovado' : 'reprovado'} </p>
        </>
    )
}
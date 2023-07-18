import React from "react";

export default function Nota(props) {
    return(
        <>
            <legend>Informe a nota: {props.num}</legend>
            <input type='text' value={props.notas} onChange={(e)=>props.setNota(e)}></input>
        </>
    )
}
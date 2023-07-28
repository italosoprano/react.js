import React, { useEffect, useState } from "react";

export default function listaCarros(){

    const [carros, setCarros]=useState([])

    useEffect(()=>{
        fetch('retorna-carros.italosoprano.repl.co')
        .then(res=> res.json())
        .then(
            (res)=>{
                setCarros(res)
            }
        )
    })
    

    return(
        <>
            {
                carros.map(()=>{
                    carros=> <div key={carros.id}>{carros.marca} - {carros.modelo}</div>
                })
            }
        </>
    )
}
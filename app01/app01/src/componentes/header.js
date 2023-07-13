import React from "react";
import mochi from './imgs/mochi.jpeg'

export default function Header(){
    return(
        <header>
            <img src={mochi} />
            <h1>Oi, eu sou o Mochi</h1>
        </header>
    )
}
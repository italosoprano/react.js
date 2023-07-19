import React, {useState, useEffect} from 'react'
import Classe from './componentes/classe'
import Carro from './componentes/carro'


export default function App(){

  return(
    <>
      <h1>Componentes de classe</h1>
      <Carro fator={10}/>
    </>
  )
}

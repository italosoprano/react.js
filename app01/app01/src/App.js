import React from 'react'
import Header from './componentes/header'
import Corpo from './componentes/corpo'
import './App.css'


export default function App(){
  const textoDestaque={
    color:'#00f',
    fontSize: '3em'
  }

  return(
    <>
    <section className='caixa'>
      <h1 style={{color: '#f00', fontSize: '5em'}}>Curso de React</h1>
      <h2 style={textoDestaque}>Primeiro estilização em React, usando CSS</h2>
      <p className='texto'>Como fazer uma estilização de CSS em react, pode ser feito, inline, interno ou externo. Porém, sempre dando preferencia para o uso de classes</p>
      <p className='texto'>No uso do css, utiliza-se Camel Case e a separação deve ser feita por meio de uma virgula, e nao um ponto e virgula.</p>
    </section>
    </>
  )
}

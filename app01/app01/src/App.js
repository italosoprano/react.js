import React, {useState, useEffect} from 'react'

const tabelaImc = () =>{
  return (
    <table border='1' style={{borderCollapse: 'collapse', justifyContent:'center', alignItems: 'center'}}>
      <thead>
        <tr>
          <th>Classificação</th>
          <th>IMC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abaixo do Peso</td>
          <td>Abaixo de 18,5</td>
        </tr>
        <tr>
          <td>Peso Normal</td>
          <td>Entre 18,5 e 24,9</td>
        </tr>
        <tr>
          <td>Sobrepeso</td>
          <td>Entre 25 e 29,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau I</td>
          <td>Entre 30 e 34,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau II</td>
          <td>Entre 35 e 39,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau III ou Mórbida</td>
          <td>Maior que 40</td>
        </tr>
      </tbody>
    </table>
  )
}

const f_peso = (p, sp) =>{
  return (
    <>
      <label>Insira seu peso: </label>
      <input type='text' value={p} onChange={(e)=>{sp(e.target.value)}}/>
    </>
  )
}

const f_altura = (a, sa) =>{
  return (
    <>
      <label>Insira sua altura: </label>
      <input type='text' value={a} onChange={(e)=>{sa(e.target.value)}}/>
    </>
  )
}

const fcalcular = (p, a, sr) =>{
  const calc = () =>{
    sr (p/(a*a))
  }
  
  return (
    <button onClick={calc()}>Calcular</button>
  )
}

const f_resultado = (r) =>{
  return (
    <>
      <div>
        Resultado: {r.toFixed(2)}
      </div>
    </>
  )
}

export default function App(){

  const [peso, setPeso]=useState(0)
  const [altura, setAltura]=useState(0)
  const [resultado, setResultado]=useState(0)

  return(
    <>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh'}}>
        {f_peso(peso, setPeso)}
        {f_altura(altura, setAltura)}
        {fcalcular(peso, altura, setResultado)}
        {f_resultado(resultado)}
        {tabelaImc()}
      </div>
    </>
  )
}

/*
  
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh'}}
      {f_resultado(resultado)}
  <div >
        {tabelaImc()}
      </div>
*/

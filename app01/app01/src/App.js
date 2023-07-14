import React, {useState} from 'react'

export default function App(){

  const [form, setform]=useState({'nome':'', 'idade':'', 'sexo':''})

  const handleChangeName = (e) =>{
    if(e.target.getAttribute('name') == 'fname') {
      setform({'name':e.target.value, 'idade': form.idade, 'sexo': form.sexo})
    } else if(e.target.getAttribute('name') == 'fidade') {
      setform({'name': form.name, 'idade': e.target.value, 'sexo': form.sexo})
    } else if(e.target.getAttribute('name') == 'fsexo') {
      setform({'name': form.name, 'idade': form.idade, 'sexo': e.target.value})
    }
  }

  return(
    <>
      <label>Nome: </label>
      <input type='text' name='fname' value={form.nome} onChange={(e)=>handleChangeName(e)}/>
      <label>Idade: </label>
      <input type='text' name='fidade' value={form.idade} onChange={(e)=>handleChangeName(e)}/>
      <label>Sexo: </label>
      <input type='text' name='fsexo' value={form.sexo} onChange={(e)=>handleChangeName(e)}/>

      <p>Nome digitando: {form.name}</p>
      <p>Idade digitando: {form.idade}</p>
      <p>Sexo digitando: {form.sexo}</p>
    </>
  )
}

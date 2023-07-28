import React, {useState, useEffect} from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Pagina1 from './componentes/pagina1'
import Pagina2 from './componentes/pagina2'
import Pagina3 from './componentes/pagina3'


export default function App(){

  
  return(
    <>
        <header>
          <Link to='/'>Home</Link>
          <Link to='Pagina1'>Página 1</Link>
          <Link to='Pagina2'>Página 2</Link>
          <Link to='Pagina3'>Página 3</Link>
        </header>
        <main>
          <Switch>
            <Route path='Pagina1' Component={Pagina1}/>
            <Route path='Pagina2' Component={Pagina2}/>
            <Route path='Pagina3' Component={Pagina3}/>
          </Switch>
        </main>
    </>
  )
}

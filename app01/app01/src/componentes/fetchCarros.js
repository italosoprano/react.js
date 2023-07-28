import React from "react";
import axios from "axios"

export default class listaCarros extends React.Component {
    state = {
        carros: []
    }

    componentDidMount(){
        axios.get('retorna-carros.italosoprano.repl.co')
            .then(res=>{
                const dadosCarros = res.data
                this.setState({carros: dadosCarros})
            })
    }
    
    render(){
        return(
            <>
                {this.state.carros.map(
                    carro=> <div key={carro.id}>{carro.marca} - {carro.modelo}</div>
                )}
            </>
        )
    }
}
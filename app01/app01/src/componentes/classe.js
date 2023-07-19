import React from "react";

export default class Classe extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <h1>Primeiro componente de classe</h1>
                <h1>Nome: {this.props.nome}</h1>
                <h1>Idade: {this.props.idade}</h1>
            </>
        )
    }
}

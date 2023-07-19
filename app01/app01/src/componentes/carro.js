import React from "react";

export default class Carro extends React.Component{
    constructor(props){
        super(props)
        this.modelo='350z'
        this.state={
            ligado:false,
            velAtual:0,
        }
        this.ld = this.ligarDesligar.bind(this)
    }
    ligarDesligar(){
        //this.state.ligado=true
        //this.setState({ligado:!this.state.ligado})
        this.setState(
            (state)=>(
                {ligado: !state.ligado}
            )
        )
        /*
        ou entao podemos fazer assim

        this.setState(
            function(state){
                return{
                    ligado: !state.ligado
                }
            }
        )
        */
    }
    acelarar(){
        this.setState(
            (state, props)=>(
                {velAtual: state.velAtual + props.fator}
            )
        )
    }
    desacelerar(){
        this.setState(
            (state, props)=>(
                {velAtual: state.velAtual - props.fator}
            )
        )
    }
    render(){
        return(
            <>
                <h1>Meu carro</h1>
                <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
                <p>Velocidade Atual: {this.state.velAtual}</p>
                <button onClick={()=>this.ld()}>
                    {this.state.ligado ? 'Desligar' : 'Ligar'}
                </button>
                <button onClick={()=>this.acelarar()}>
                    acelarar
                </button>
                <button onClick={()=>this.desacelerar()}>
                    desacelerar
                </button>
            </>
        )
    }
}

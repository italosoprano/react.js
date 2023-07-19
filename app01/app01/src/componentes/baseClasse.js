import React from "react";

export default class BaseClass extends React.Component{
    constructor(props){
        //instruções do construtor
        super(props)
        //passar props pro componente pai
        this.state={
            //criar o atributo state
            nome: 'italo',
            idade: 27,
            sexo: 'M',
            curso: 'React',
            cursando: true,
            aluno: this.props.nomeAluno
        }
        this.status = this.props.statusAluno
        let ca = this.cursoEmAndamento.bind(this)
    }
    //manipulação de state
    cursoEmAndamento(){
        this.setState(
            (state)=>(
                {cursando: !cursando}
            )
        )
    }
    componentDidMount(){
        console.log('componente foi montado');
    }
    componentDidUpdate(){
        console.log('componente foi atualizado');
    }
    componentWillUnmount(){
        console.log('componente foi desmontado');
    }
    render(){
        return(
            <>
                <h1>Componente de classe em React</h1>
                <button onClick={this.ca}>Checar</button>
                <button onClick={()=>this.cursoEmAndamento()}>Checar</button>
            </>
        )
    }
}


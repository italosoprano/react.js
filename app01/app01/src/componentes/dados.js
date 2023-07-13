import React from "react";

//quando se declara o props na função de desenvolvimento, passa-se atributos que serão passados para os valores do componente
export default function Dados(props) {
    let n1 = 89
    let n2 = 10
    return(
        <section>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
            <p>Sexo: {props.sexo}</p>
            <p>{'A soma de ' + n1 + ' com ' + n2 + ' é igual a ' + props.somar(n1, n2)}</p>
        </section>
    )
}
import React, {useState, useEffect} from 'react'

const carros = [
    {categoria: 'Sport', preço: '428000', modelo: 'Camaro', marca: 'Chevrolet'},
    {categoria: 'Sport', preço: '23000', modelo: 'Challenger', marca: 'Dodge'},
    {categoria: 'Sport', preço: '234000', modelo: 'Charger', marca: 'Dodge'},
    {categoria: 'JDM', preço: '645000', modelo: 'RX7', marca: 'Mazda'},
    {categoria: 'JDM', preço: '272000', modelo: '240z', marca: 'Nissan'},
    {categoria: 'JDM', preço: '756000', modelo: '350z', marca: 'Nissan'},
    {categoria: 'JDM', preço: '234000', modelo: 'Supra', marca: 'Toyota'},
    {categoria: 'JDM', preço: '674000', modelo: 'Evolution', marca: 'Mistubishi'},
    {categoria: 'JDM', preço: '534000', modelo: 'Skyline', marca: 'Nissan'},
    {categoria: 'JDM', preço: '423000', modelo: 'FIT', marca: 'Honda'},
    {categoria: 'JDM', preço: '534000', modelo: 'NSX', marca: 'Honda'},
    {categoria: 'Sport', preço: '123000', modelo: 'Viper', marca: 'Dodge'},
    {categoria: 'Sport', preço: '654000', modelo: 'Mustang', marca: 'Ford'},
    {categoria: 'Sport', preço: '234000', modelo: 'M3', marca: 'BMW'},
    {categoria: 'Sport Luxo', preço: '456000', modelo: 'Carrera GT', marca: 'Porche'},
    {categoria: 'Sport Luxo', preço: '234000', modelo: 'Gallardo', marca: 'Lamborghini'},
    {categoria: 'Sport Luxo', preço: '345000', modelo: 'Murciellargo', marca: 'Lamborghini'},
    {categoria: 'Sport Luxo', preço: '653000', modelo: '911 GT2', marca: 'Porsche'},
    {categoria: 'JDM', preço: '235000', modelo: 'Impreza', marca: 'Subaru'},
    ]

    const linhas = (cat) =>{
        const li = []

        carros.map(
            (carro)=>{
            if(carro.categoria.toUpperCase() == cat.toUpperCase() || cat.toUpperCase == ''){
                li.push(
                <tr>
                    <td>{carro.modelo}</td>
                    <td>{carro.marca}</td>
                    <td>{carro.categoria}</td>
                    <td>{'R$: ' + carro.preço}</td>
                </tr>
                )
            }
            }
        )

        return li
    }


  const tabelaCarros = (cat) =>{
        return(
        <table border='1' style={{borderCollapse:'collapse'}}>
            <thead>
            <tr>
                <td>Modelo</td><td>Marca</td><td>Categoria</td><td>Preço</td>
            </tr>
            </thead>
            <tbody>
            {linhas(cat)}
            </tbody>
        </table>
        )
    }

    const pesquisaCategoria = (cat, scat) =>{
    return (
        <>
            <label>Digite uma categoria</label>
            <input type='text' value={cat} onChange={(e)=>scat(e.target.value)}/>
        </>
        )
    }


export default function App(){

const [categoria, setCategoria]=useState('')

    return(
        <>

        {pesquisaCategoria(categoria, setCategoria)}
        <br/>
        {tabelaCarros(categoria)}
        </>
    )
}
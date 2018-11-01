import React , { Component } from 'react'
import lego from './NaoEncontrada.PNG'
import './NaoEncontrada.css'

function NaoEncontrada() {
  return (
    <main className="nao-encontrada">
        <h1>Página não encontrada</h1>
        <p className="nao-encontrada__simbolo">
        </p>
        <img src={lego} alt="Lego não encontrado"/>

    </main>
  )
}


export default NaoEncontrada

import React from 'react'
import Link from '../../components/Link/Link'
import Botao from '../../components/Botao/Botao'
import Legenda from '../../components/Legenda/Legenda'
import Campo from '../../components/Campo/Campo'
import './Conta.css'

function Conta() {
  return (
  <main className="conta">
  <h1>Conta</h1>
  <p>Envie o formulário para criar uma conta!</p>
    <Legenda htmlFor="nome">Nome:</Legenda>
    <Campo type="text" id="nome" name="nome" placeholder="Insira seu nome aqui"  required></Campo>

    <Legenda htmlFor="telefone">Telefone:</Legenda>
    <Campo type="tel" id="telefone" name="telefone" placeholder="Insira seu telefone aqui"  required></Campo>

    <Legenda htmlFor="email">Email:</Legenda>
    <Campo type="email" id="email" name="email" placeholder="Insira seu e-mail aqui"  required pattern={/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}></Campo>

    <Legenda htmlFor="senha">Senha:</Legenda>
    <Campo type="password" id="senha" name="senha" placeholder="Insira sua senha aqui"  required minLength={6}></Campo>

  <Botao desabilitado texto="Enviar"></Botao>
  <Botao texto="Enviar"></Botao>

  <Link url="/conta">Fazer Login</Link>
  </main>
)
};
export default Conta

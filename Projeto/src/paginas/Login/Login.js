import React from 'react'
import Link from '../../components/Link/Link'
import Botao from '../../components/Botao/Botao'
import Legenda from '../../components/Legenda/Legenda'
import Campo from '../../components/Campo/Campo'
import './Login.css'

function Login() {
  return (
  <main className="login">
  <h1>Login</h1>
  <p>Entre com seu e-mail e Senha.</p>

  <Legenda htmlFor="email">Email:</Legenda>
  <Campo type="email" id="email" name="email" placeholder="Insira seu e-mail aqui" required minLength={10}></Campo>

  <Legenda htmlFor="senha">Senha:</Legenda>
  <Campo type="password" id="senha" name="senha" placeholder="Insira sua senha aqui" required minLength={6}></Campo>

  <Botao desabilitado texto="Enviar"></Botao>
  <Botao texto="Enviar"></Botao>

  <Link url="/conta">Criar uma Conta</Link>
  </main>
)
};
export default Login

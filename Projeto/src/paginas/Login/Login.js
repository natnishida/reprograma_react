import React from 'react'
import Link from '../../components/Link/Link'
import Botao from '../../components/Botao/Botao'
import './Login.css'

function Login() {
  return (
  <main className="login">
  <h1>Login</h1>
  <p>Entre com seu e-mail e Senha.</p>
  <Link url="/conta">Criar uma Conta</Link>
  <Botao desabilitado texto="Enviar"></Botao>
  <Botao texto="Enviar"></Botao>
  </main>
)
};
export default Login

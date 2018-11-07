import React , { Component } from 'react'
import Link from '../../components/Link/Link'
import Botao from '../../components/Botao/Botao'
import Legenda from '../../components/Legenda/Legenda'
import Campo from '../../components/Campo/Campo'
import './Conta.css'

/*
1) O componente pode mudar de estado? Sim // class
2) O que muda? setState({ desabilitado: false }) ou  // setState({ desabilitado: true })
3) Qual o estado inicial? state = { desabilitado: false } // constructor
4) O que faz ele mudar?
// function onChange pra verificar se todos os campos estão corretos (não têm erro)
*/

class Conta extends Component {
  constructor(props) {
    super(props)
      this.nomeRef = React.createRef()
      this.telefoneRef = React.createRef()
      this.emailRef = React.createRef()
      this.senhaRef = React.createRef()
      this.state = { desabilitado: true }
  }

  handleChange = () => {
    const campoNome = this.nomeRef.current
    const campoTelefone = this.telefoneRef.current
    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current

    if (campoNome.temErro() || campoTelefone.temErro() || campoEmail.temErro() || campoSenha.temErro()) {
      this.setState({ desabilitado: true })
    } else {
      this.setState({ desabilitado: false})
    }
      }

render() {
  return (
  <main className="conta">
  <h1>Conta</h1>
  <p>Envie o formulário para criar uma conta!</p>
    <Legenda htmlFor="nome">Nome:</Legenda>
    <Campo ref={this.nomeRef} type="text" id="nome" name="nome" placeholder="Insira seu nome aqui"  required onChange={this.handleChange}></Campo>

    <Legenda htmlFor="telefone">Telefone:</Legenda>
    <Campo ref={this.telefoneRef} type="tel" id="telefone" name="telefone" placeholder="Insira seu telefone aqui"  required onChange={this.handleChange}></Campo>

    <Legenda htmlFor="email">Email:</Legenda>
    <Campo ref={this.emailRef} type="email" id="email" name="email" placeholder="Insira seu e-mail aqui"  required onChange={this.handleChange}></Campo>

    <Legenda htmlFor="senha">Senha:</Legenda>
    <Campo ref={this.senhaRef} type="password" id="senha" name="senha" placeholder="Insira sua senha aqui"  required minLength={6} onChange={this.handleChange}></Campo>


  <Botao desabilitado={this.state.desabilitado} texto="Enviar"></Botao>

  <Link url="/login">Fazer Login</Link>
  </main>
)
}
}
export default Conta

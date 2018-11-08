import React , { Component } from 'react'
import { connect } from 'react-redux'
import { logaUsuario } from '../../redux/actions'
import Link from '../../components/Link/Link'
import Botao from '../../components/Botao/Botao'
import Legenda from '../../components/Legenda/Legenda'
import Campo from '../../components/Campo/Campo'
import './Login.css'


class Login extends Component {
  constructor(props) {
    super(props)
      this.emailRef = React.createRef()
      this.senhaRef = React.createRef()
      this.state = { desabilitado: true }
  }


enviaDados = (evento) => {
    evento.preventDefault()
    const dados = {
      email: this.emailRef.current.getValor(),
      senha: this.senhaRef.current.getValor()
    }

    this.props.logaUsuario(dados)
    this.props.history.push('/')
}


  handleChange = () => {
    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current

    if (campoEmail.temErro() || campoSenha.temErro()) {
      this.setState({ desabilitado: true })
    } else {
      this.setState({ desabilitado: false})
    }
      }


  render(){
        return (
              <main className="login">
                    <h1>Login</h1>
                    <p>Entre com seu e-mail e Senha.</p>
              <form onSubmit={this.enviaDados}>
                    <Legenda htmlFor="email">Email:</Legenda>
                    <Campo ref={this.emailRef} type="email" id="email" name="email" placeholder="Insira seu e-mail aqui" required onChange={this.handleChange}></Campo>

                    <Legenda htmlFor="senha">Senha:</Legenda>
                    <Campo ref={this.senhaRef} type="password" id="senha" name="senha" placeholder="Insira sua senha aqui" required minLength={6} onChange={this.handleChange}></Campo>

                    <Botao desabilitado={this.state.desabilitado} texto="Enviar"></Botao>
              </form>
                    <Link url="/conta">Criar uma Conta</Link>
              </main>
      )}
}




const LoginConectado = connect(null, { logaUsuario })(Login)

export default LoginConectado

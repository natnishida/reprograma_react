import React , { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aberto: false
    }
  }
  abreOuFechaMenu = () => {

      if (this.state.aberto) {
        this.setState({ aberto: false })
      } else {
        this.setState({ aberto: true })
      }
  }

  sair = () => {
    this.abreOuFechaMenu()
    this.props.deslogaUsuario()
  }

  render() {
    let classesDoBotao = "navbar-menu__botao"
    let classesDasOpcoes = "navbar-menu__opcoes"

    if (this.state.aberto) {
      // coloco na variavel a classe que fica independente de aberto ou fechado mais a classe quando fica aberto
      classesDoBotao += " navbar-menu__botao--aberto"
      classesDasOpcoes += " navbar-menu__opcoes--aberto"
    }


  return (
    <nav className="navbar-menu">
      <a onClick={this.abreOuFechaMenu} className={classesDoBotao}>
        Menu
      </a>

        <ul className={classesDasOpcoes}>
            <li><NavLink to="/quem-somos" onClick={this.abreOuFechaMenu} activeClassName="navbar-menu__opcoes--ativo">Quem somos</NavLink></li>
            <li><NavLink to="/contato" onClick={this.abreOuFechaMenu} activeClassName="navbar-menu__opcoes--ativo">Contato</NavLink></li>

            {this.props.usuario ? (
                <li><NavLink to="/login" onClick={this.sair} activeClassName="navbar-menu__opcoes--ativo">Sair</NavLink></li>
              ) : (
                <li><NavLink to="/login" onClick={this.abreOuFechaMenu} activeClassName="navbar-menu__opcoes--ativo">Entrar</NavLink></li>
                )}
        </ul>

    </nav>
  )
}
}

export default Menu

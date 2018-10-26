import React from 'react'
import './Campo.css'

class Campo extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        erro: ''
      }

      // this.valida = this.valida.bind(this)
    }

    valida = (evento) => {
      const alvo = evento.target
      if (alvo.name === 'nome' && alvo.value === '') {
        const state = {
          erro: 'Campo Obrigatório'
        }

        this.setState(state)
      }
    }

    render() {
      return (
        <div>
        <input
          className="caixa-texto"
          type={this.props.type}
          id={this.props.id}
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.valida}
          />
        <p className="grupo__erro">
          {this.state.erro}
        </p>
      </div>
              )
              }
            }

export default Campo

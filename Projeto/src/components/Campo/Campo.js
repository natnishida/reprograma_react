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

      const input = evento.target
      console.log(input)

      if (this.props.required && input.value.trim() === '') {
        this.setState({erro: 'Campo Obrigatório'})
      } else if (this.props.minLength && input.value.length < this.props.minLength) {
        this.setState({erro: `Digite pelo menos ${this.props.minLength} caracteres`})
      } else if (this.props.pattern && !this.props.pattern.test(input.value)) {
        this.setState({erro: 'Email não válido'})
      }

      else {this.setState({erro:''})
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

import React , { Component } from 'react'
import './Campo.css'

class Campo extends Component {
  constructor(props) {
    super(props)
      this.state = {
        erro: ''
      }

      // this.valida = this.valida.bind(this)
    }

    valida = (evento) => {

      const input = evento.target
      const { value, type} = input
      const { required, minLength, pattern } = this.props
      // const required = this.props.required
      // const minLength = this.props.minLength
      // const pattern = this.props.pattern
      const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      let mensagem = ''

      if (required && value.trim() === '') {
        mensagem = 'Campo Obrigatório'}
       else if (minLength && value.length < minLength) {
        mensagem = `Digite pelo menos ${minLength} caracteres`}
       else if (type === 'email' && !regex.test(value)) {
        mensagem = 'Email não válido'}


      this.setState({erro: mensagem})

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
          onBlur={this.valida}
          />
        <p className="grupo__erro">
          {this.state.erro}
        </p>
      </div>
              )
              }
            }

export default Campo

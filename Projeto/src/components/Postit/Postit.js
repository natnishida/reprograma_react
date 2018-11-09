import React, { Component } from 'react'
import { cadastraPostit } from '../../redux/actions'
import { connect } from 'react-redux'
import './Postit.css'

class Postit extends Component {
  constructor(props) {
    super(props)

  }
  cadastraOuAlteraPostit = (evento) => {
    evento.preventDefault()

    const form = evento.target
    const dados = {
      id: `ad606bd8-ab14-4277-887a-c4298dfefc06${Math.random(100)}`,
      titulo: form.titulo.value,
      texto:form.texto.value
    }
    this.props.cadastraPostit(dados)

    form.reset()

  }
// no jsx eu passo valor de atributo numero entre chaves
  render() {
    const cadastrando = !this.props.id
    return (
      <form onSubmit={this.cadastraOuAlteraPostit} className="postit">
        <input type="text" className="postit__titulo" name="titulo" placeholder="Título" autoComplete="off" defaultValue={this.props.titulo}/>
        <textarea className="postit__texto" name="texto" placeholder="Digite um texto..." rows={5} autoComplete="off" defaultValue={this.props.texto}/>
    
        <button type="submit" className="postit__botao-concluir">Concluir</button>
      </form>
    )
  }
}

export default connect(
  null,
  { cadastraPostit })(Postit)

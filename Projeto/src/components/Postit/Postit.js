import React, { Component } from 'react'
import { cadastraPostit, alteraPostit, deletaPostit } from '../../redux/actions'
import { connect } from 'react-redux'
import { MdDelete } from 'react-icons/md'
import './Postit.css'

class Postit extends Component {
  constructor(props) {
    super(props)
    this.state = { editando: false }

  }
  cadastraOuAlteraPostit = (evento) => {
    evento.preventDefault()

    const cadastrando = !this.props.id

    const form = evento.target

    if (cadastrando) {
      const dados = {
        
        titulo: form.titulo.value,
        texto:form.texto.value
      }
      this.props.cadastraPostit(dados)

      form.reset()
      //123123
      //camilaibs@gmail.com

    } else {
      const dados = {
        id: this.props.id,
        titulo: form.titulo.value,
        texto: form.texto.value
      }
      this.props.alteraPostit(dados)
      this.setState({ editando: false })
    }
}

  trocaEstadoDoPostit = () => {
      this.setState({ editando: true })
    }

  removePostit = (evento) => {
    evento.stopPropagation()

    this.props.deletaPostit(this.props.id)
  }


// no jsx eu passo valor de atributo numero entre chaves
  render() {
    const cadastrando = !this.props.id
    return (
      <form onClick={this.trocaEstadoDoPostit} onSubmit={this.cadastraOuAlteraPostit} className="postit">
        {(!cadastrando && this.state.editando) && (
          <button onClick={this.removePostit} type="button" className="postit__botao-remover"><MdDelete/></button>
        )}

        <input type="text" className="postit__titulo" name="titulo" placeholder="Título" autoComplete="off" defaultValue={this.props.titulo}/>
        <textarea className="postit__texto" name="texto" placeholder="Digite um texto..." rows={5} autoComplete="off" defaultValue={this.props.texto}/>

      {(cadastrando || this.state.editando) && (
        <button type="submit" className="postit__botao-concluir">Concluir</button>
      )}


      </form>
    )
  }
}

export default connect(
  null,
  { cadastraPostit, alteraPostit, deletaPostit })(Postit)

import React from 'react'
import './Botao.css'

function Botao(props){
  let classes = "botao"
  if (props.desabilitado) {
    classes += " botao--desabilitado"
  }
  return (
    <input className={classes} disabled={props.desabilitado} type="submit" value={props.texto}/>
  )
}

export default Botao

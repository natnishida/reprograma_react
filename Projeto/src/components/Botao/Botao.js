import React from 'react'
import './Botao.css'

function Botao(btn){
  let classes = "botao"
  if (btn.desabilitado) {
    classes += " botao--desabilitado"
  }
  return (
    <input className={classes} type="submit" value={btn.texto}/>
  )
}

export default Botao

import React from 'react'
import ReactDOM from 'react-dom'
import Link from './components/Link/Link'
import Botao from './components/Botao/Botao'
import './index.css'
import Login from './paginas/Login/Login'

const divisaoProjeto = document.getElementById('projeto')
ReactDOM.render(Login(), divisaoProjeto)

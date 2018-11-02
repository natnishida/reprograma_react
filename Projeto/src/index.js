import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './paginas/Login/Login'
import Conta from './paginas/Conta/Conta'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Contato from './paginas/Contato/Contato'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import Home from './paginas/Home/Home'
import Navbar from './components/Navbar/Navbar'
import './index.css'


let usuario = JSON.parse(localStorage.getItem('usuario'))

function logaUsuario(dados) {
  const json = JSON.stringify(dados)
  localStorage.setItem('usuario', json)
  usuario = dados
}

function deslogaUsuario() {
  localStorage.removeItem('usuario')
  usuario = null
}

function App() {
  return (

    <div className="app">
        <Navbar usuario={usuario} deslogaUsuario = {deslogaUsuario}/>

        <Switch>
            <Route path="/" exact render={() => {
                return usuario ? <Home /> : <Redirect to="/login" />
              }} />
            <Route path="/conta" component={Conta} />
            <Route path="/login" render={(props) => {
                return <Login historico={props.history} onEnviar={logaUsuario} />
              }} />
            <Route path="/quem-somos" component={QuemSomos} />
            <Route path="/contato" component={Contato} />
            <Route component={NaoEncontrada} />
        </Switch>

    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('projeto')
)

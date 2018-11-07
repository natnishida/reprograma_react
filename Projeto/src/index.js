import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Login from './paginas/Login/Login'
import Conta from './paginas/Conta/Conta'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Contato from './paginas/Contato/Contato'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import Home from './paginas/Home/Home'
import Navbar from './components/Navbar/Navbar'
import './index.css'


// let usuario = JSON.parse(localStorage.getItem('usuario'))
//
// function logaUsuario(dados) {
//   const json = JSON.stringify(dados)
//   localStorage.setItem('usuario', json)
//   usuario = dados
// }
//
// function deslogaUsuario() {
//   localStorage.removeItem('usuario')
//   usuario = null
// }

function App() {

  return (

    <div className="app">
        <Navbar/>

        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/conta" component={Conta} />
            <Route path="/login" component={Login} />
            <Route path="/quem-somos" component={QuemSomos} />
            <Route path="/contato" component={Contato} />
            <Route component={NaoEncontrada} />
        </Switch>

    </div>
  )
}


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('projeto')
)

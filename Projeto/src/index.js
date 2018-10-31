import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './paginas/Login/Login'
import Conta from './paginas/Conta/Conta'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Contato from './paginas/Contato/Contato'
import './index.css'


function App() {
  return (

    <div className="app">
        {/*NavBar*/}

        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/conta" component={Conta} />
            <Route path="/login" component={Login} />
            <Route path="/quem-somos" component={QuemSomos} />
            <Route path="/Contato" component={Contato} />
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

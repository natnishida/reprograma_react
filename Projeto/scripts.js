// const linkCriarUmaConta = React.createElement('a', {className: 'link', href:'/conta', children:'Criar uma Conta'});
// const fazerLogin = React.createElement('a', {className: 'link', href:'/login', children:'Fazer Login'})
//
// const formularioLogin = React.createElement('form', {
//   children: [linkCriarUmaConta, fazerLogin]
// })
// const divisaoProjeto = document.getElementById('projeto')
// ReactDOM.render(formularioLogin, divisaoProjeto)



// const linkCriarUmaConta = <a class="link" href="/conta">Criar uma Conta</a>
// const linkFazerLogin = <a class="link" href="/login">Fazer Login</a>
// const formularioLogin = (
// <form>
// {linkCriarUmaConta}
// {linkFazerLogin}
// </form>
// )
// const divisaoProjeto = document.getElementById('projeto')
// ReactDOM.render(formularioLogin, divisaoProjeto)



function Link(props){
  return (
    <a className="link" href={props.url}>
    {props.children}
    </a>
  )
}

function Botao(btn){
  let classes = "botao"
  if (btn.desabilitado) {
    classes += " botao--desabilitado"
  }
  return (

    <input className={classes} type="submit" value={btn.texto}/>

  )

}

const paginaLogin = (
  <main className="pagina-login">
  <h1>Login</h1>
  <p>Entre com seu e-mail e Senha.</p>
  <Link url="/conta">Criar uma Conta</Link>
  <Botao desabilitado texto="Enviar"></Botao>
  <Botao texto="Enviar"></Botao>
  </main>
)
const divisaoProjeto = document.getElementById('projeto')
ReactDOM.render(paginaLogin, divisaoProjeto)

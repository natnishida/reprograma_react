// const linkCriarUmaConta = React.createElement('a', {className: 'link', href:'/conta', children:'Criar uma Conta'});
// const fazerLogin = React.createElement('a', {className: 'link', href:'/login', children:'Fazer Login'})
//
// const formularioLogin = React.createElement('form', {
//   children: [linkCriarUmaConta, fazerLogin]
// })
// const divisaoProjeto = document.getElementById('projeto')
// ReactDOM.render(formularioLogin, divisaoProjeto)


const linkCriarUmaConta = <a class="link" href="/conta">Criar uma Conta</a>
const linkFazerLogin = <a class="link" href="/login">Fazer Login</a>
const formularioLogin = (
<form>
{linkCriarUmaConta}
{linkFazerLogin}
</form>
)
const divisaoProjeto = document.getElementById('projeto')
ReactDOM.render(formularioLogin, divisaoProjeto)

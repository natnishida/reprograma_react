//criar um link via javascript puro;
// <a class="link" href="/conta">Criar Conta</a>

const linkCriarUmaConta = document.createElement('a')
linkCriarUmaConta.className = "link"
linkCriarUmaConta.href = "/conta"
linkCriarUmaConta.appendChild(document.createTextNode('Criar uma Conta'))



//criar um link via javascript puro
// <a class="link" href="/login">Fazer Login</a>
const linkFazerLogin = document.createElement('a')
linkFazerLogin.className = "link"
linkFazerLogin.href = "/login"
linkFazerLogin.appendChild(document.createTextNode('Fazer Login'))



//criar um formulario de login
const formularioLogin = document.createElement('form')
formularioLogin.className = "formLogin"

formularioLogin.appendChild(linkCriarUmaConta)
formularioLogin.appendChild(linkFazerLogin)

const divisaoProjeto = document.getElementById('projeto')

divisaoProjeto.appendChild(formularioLogin)

// teremos as funções disparadoras de ação

// ações do usuario
import axios from 'axios'

const configuracoes = {
  baseURL: 'https://reprograma-postit-api.herokuapp.com'
}


const json = localStorage.getItem('usuario')
if (json) {
  const usuario = JSON.parse(json)
  configuracoes.headers = {
    'Authorization': usuario.token
  }
}

const api = axios.create(configuracoes)

export function logaUsuario(dados) {
  return (dispatch) => {
    api
    .post('/login', dados)
    .then(response => {
      api.defaults.headers.common.Authorization = response.data.usuario.token
      //escrever [authorization] é igual a escrever.authorization
      dispatch({
        type: 'LOGA_USUARIO',
        dados: response.data.usuario
        // quando o atributo é igual ao seu valor, podemos so colocar dados ao inves de dados:dados
      })
    })
  }
}

export function deslogaUsuario() {
  return {
    type: 'DESLOGA_USUARIO'
  }
}

export function cadastraPostit(dados) {
  return (dispatch) => {
    api
    .post('/postits', dados)
    .then(response => {
      dados.id = response.data.id
      dispatch({
          type: 'CADASTRA_POSTIT',
          dados
      })
    })
  }
}

export function alteraPostit(dados) {
  return (dispatch) => {
    const url = `/postits/${dados.id}`
    api
    .put(url, dados)
    .then(response => {
      dispatch({ type: 'ALTERA_POSTIT', dados })
    })
  }
}

export function deletaPostit(id) {
  return (dispatch) => {
    const url = `/postits/${id}`
    api
    .delete(url)
    .then(response => {
      dispatch({
        type: 'DELETA_POSTIT',
        id
      })
    })
  }
}

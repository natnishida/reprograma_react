// teremos as funções disparadoras de ação

// ações do usuario

export function logaUsuario(dados) {
  return {
    type: 'LOGA_USUARIO',
    dados
    // quando o atributo é igual ao seu valor, podemos so colocar dados ao inves de dados:dados
  }
}

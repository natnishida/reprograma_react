// criaremos um armazenamento pro state global do nosso site
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

const componeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const store = createStore(
  reducers,
  componeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store

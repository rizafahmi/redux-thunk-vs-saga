import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import dataSaga from './saga.js'

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(dataSaga)
  return store
}

export default configureStore

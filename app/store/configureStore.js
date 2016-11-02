import {combineReducers, createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './../reducers/index'


export const configure = () => {
  const rootReducer = combineReducers({
    ...reducers
  })

  const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension(): f => f
    ))

  return store
}

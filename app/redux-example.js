const redux = require('redux')
// reducers 就是介於 action 與 state 中間的 pure functions

const reducer = (state = {name: "anonymous"}, action) => {
  return state
}

// reducer has default state
// reducer will always return state no matter what kind of action is

const store = redux.createStore(reducer)
const currentState = store.getState()
console.log('currentState: ', currentState)

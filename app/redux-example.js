const redux = require('redux')
// reducers 就是介於 action 與 state 中間的 pure functions

const reducer = (state = {name: "anonymous"}, action) => {
  console.log('new action:', action)
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }
    default:
      return state
  }
}

// reducer has default state
// reducer will always return state no matter what kind of action is

const store = redux.createStore(reducer)
const currentState = store.getState()

console.log('currentState: ', currentState)

// action object
store.dispatch({
  type: 'CHANGE_NAME',
  name: "Jay"
})

console.log('newState: ', store.getState())

store.dispatch({
  type: 'CHANGE_NAME',
  name: "Faye!"
})


console.log('newState: ', store.getState())

import { createStore, compose } from 'redux'

// initial state: 先創造 reducer
const initialState = {
  todos: [],
  searchTerm: "",
  showCompleted: false
}

const reducer = (state = initialState, action) => {
  console.log('new action: ', action)
  switch(action.type) {
    case 'CHANGE_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.searchTerm
      }
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          action.todo
        ]
      }
    default:
      return state
  }
}
const store = createStore(reducer, compose(window.devToolsExtension ? window.devToolsExtension() : f => f))
store.subscribe( () => {
    document.getElementById('app').innerHTML = store.getState().searchTerm
})


// actions
store.dispatch({
  type: 'CHANGE_SEARCH_TERM',
  searchTerm: "hello, world!"
})
store.dispatch({
  type: 'ADD_TODO',
  todo: {
    id: "new",
    title: "Finish the action dispatch",
    completed: false
  }
})
store.dispatch({
  type: 'ADD_TODO',
  todo: {
    id: 'newer',
    title: 'Install the Redux Devtool',
    completed: true
  }
})

store.dispatch({
  type: 'CHANGE_SEARCH_TERM',
  searchTerm: "REdux!!!"
})

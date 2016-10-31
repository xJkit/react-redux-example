import { createStore, compose } from 'redux'

// initial state: 先創造 reducer
const initialState = {
  todos: [
    {
      id: "1st",
      title: "Walk the dog",
      completed: false
    }, {
      id: "2nd",
      title: "See the movie",
      completed: false
    }, {
      id: "3rd",
      title: "Finish the project",
      completed: false
    }
  ],
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
        todos: state.todos.concat(action.todo)
      }
    default:
      return state
  }
}
const store = createStore(reducer, compose(window.devToolsExtension ? window.devToolsExtension() : f => f))
store.subscribe( () => {
  const state = store.getState()
  console.log('[state]: searchTerm = ', state.searchTerm)
  console.log('[state]: todos = ', state.todos)
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

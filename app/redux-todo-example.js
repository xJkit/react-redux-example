import { createStore } from 'redux'

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
  return state
}

const store = createStore(reducer)
const currentState = store.getState()

console.log('current todo state: ', currentState)

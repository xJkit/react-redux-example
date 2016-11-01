import { createStore, compose, combineReducers } from 'redux'

/********** reducers *******/
const movieReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          title: action.title,
          year: action.year,
          platforms: action.platforms
        }
      ]
    case 'REMOVE_MOVIE':
      return state.filter( movie => movie.title !== action.title)
    default:
      return state
  }
}

const hobbyReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          category: action.category,
          name: action.name
        }
      ]
    case 'REMOVE_HOBBY':
      return state.filter( hobby => hobby.name !== action.name)
    default:
      return state
  }
}

const rootReducer = combineReducers({
  movies: movieReducer,
  hobbies: hobbyReducer
})
/***************************/

const store = createStore(rootReducer, compose(window.devToolsExtension ?window.devToolsExtension(): f => f))

/******** actions *******/

store.dispatch({
  type: 'ADD_MOVIE',
  title: "Harry Potter and the Chamber of Secrets",
  year: 2002,
  platforms: ["Windows", "macOS"]
})

store.dispatch({
  type: 'ADD_MOVIE',
  title: "Harry Potter Quidditch World Cup",
  year: 2003,
  platforms: ["Windows"]
})

store.dispatch({
  type: 'ADD_HOBBY',
  category: "Miscellaneous",
  name: "Watch the stars"
})

store.dispatch({
  type: 'ADD_HOBBY',
  category: "Sport",
  name: "Jogging"
})

store.dispatch({
  type: 'ADD_HOBBY',
  category: "Sport",
  name: "Basketball"
})


// remove actions
store.dispatch({
  type: 'REMOVE_MOVIE',
  title: "Harry Potter and the Chamber of Secrets"
})

store.dispatch({
  type: 'REMOVE_HOBBY',
  name: 'Jogging'
})

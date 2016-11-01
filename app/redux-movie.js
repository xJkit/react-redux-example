import { createStore, compose } from 'redux'
const stateDefault = {
  movies: [
    {
      title: "Harry Potter and the Philosopher's Stone",
      year: 2001,
      platforms: ["Windows", "macOS"]
    }
  ],
  hobbies: [
    {
      category: "Sport",
      name: "Basketball"
    }, {
      category: "Music",
      name: "Drum Kit"
    }
  ]
}
let movieId = 1
const reducer  = (state = stateDefault, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: movieId++,
            title: action.movie.title,
            year: action.movie.year,
            platforms: action.movie.platforms
          }
        ]
      }
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          action.hobby
        ]
      }
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter(movie => movie.title !== action.title)
      }
    default:
      return state
  }
}

const store = createStore(reducer, compose(window.devToolsExtension ?window.devToolsExtension(): f => f))
console.log('state: ', store.getState())
store.dispatch({
  type: 'ADD_MOVIE',
  movie: {
    title: "Harry Potter and the Chamber of Secrets",
    year: 2002,
    platforms: ["Windows", "macOS"]
  }
})

store.dispatch({
  type: 'ADD_MOVIE',
  movie: {
    title: "Harry Potter Quidditch World Cup",
    year: 2003,
    platforms: ["Windows"]
  }
})

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: {
    category: "Miscellaneous",
    name: "Watch the stars"
  }
})


// remove a movie
store.dispatch({
  type: 'REMOVE_MOVIE',
  title: "Harry Potter and the Chamber of Secrets"
})

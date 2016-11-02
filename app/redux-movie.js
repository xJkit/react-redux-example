import { createStore, compose, combineReducers } from 'redux'
import axios from 'axios'

/********** reducers & action generators *******/
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
const addMovie = (title, year, platforms) => {
  return {
    type: 'ADD_MOVIE',
    title,
    year,
    platforms
  }
}

const removeMovie = (title) => {
  return {
    type: 'REMOVE_MOVIE',
    title
  }
}

//-----

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

const addHobby = (category, name) => {
  return {
    type: 'ADD_HOBBY',
    category,
    name
  }
}

const removeHobby = (name) => {
  return {
    type: 'REMOVE_HOBBY',
    name
  }
}

//------
const mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch(action.type) {
    case 'START_FETCHING':
      return {
        isFetching: true,
        url: undefined
      }
    case 'COMPLETE_FETCHING':
      return {
        isFetching: false,
        url: action.url
      }
    default:
      return state
  }
}

const startFetching = () => {
  return {
    type: 'START_FETCHING',
  }
}

const completeFetching = (url) => {
  return {
    type: 'COMPLETE_FETCHING',
    url
  }
}

const fetchLocationFromIpInfo = () => {
  const url_info = 'http://ipinfo.io/json'
  store.dispatch(startFetching())
  axios.get(url_info)
    .then(res => {
      return res.data.loc
    })
    .then( loc => {
      const url_loc = 'http://maps.google.com?q=' + loc
      store.dispatch( completeFetching(url_loc) )
    })
    .catch( err => {
      return new Error('error location')
    })
}


//------
const rootReducer = combineReducers({
  movies: movieReducer,
  hobbies: hobbyReducer,
  maps: mapReducer
})
/***************************/

const store = createStore(rootReducer, compose(window.devToolsExtension ?window.devToolsExtension(): f => f))

/******** actions *******/
store.dispatch( addMovie("Harry Potter and the Chamber of Secrets", 2002, ["Windows", "macOS"]) )
store.dispatch( addMovie("Harry Potter Quidditch World Cup", 2003, ["Windows"]))
store.dispatch( addHobby("Miscellaneous", "Watch the stars"))
store.dispatch( addHobby("Sport", "Jogging"))
store.dispatch( addHobby("Sport", "Basketball"))
store.dispatch( removeMovie("Harry Potter and the Chamber of Secrets"))
store.dispatch( removeHobby("Jogging"))
fetchLocationFromIpInfo()

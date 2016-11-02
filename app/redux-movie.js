import { configure } from './store/configureStore'
import * as actions from './actions/index.js'

const store = configure()
/***************************/


/******** actions *******/
store.dispatch( actions.addMovie("Harry Potter and the Chamber of Secrets", 2002, ["Windows", "macOS"]) )
store.dispatch( actions.addMovie("Harry Potter Quidditch World Cup", 2003, ["Windows"]))
store.dispatch( actions.addHobby("Miscellaneous", "Watch the stars"))
store.dispatch( actions.addHobby("Sport", "Jogging"))
store.dispatch( actions.addHobby("Sport", "Basketball"))
store.dispatch( actions.removeMovie("Harry Potter and the Chamber of Secrets"))
store.dispatch( actions.removeHobby("Jogging"))

// without thunk
/*
  actions.fetchLocationFromIpInfo()
*/
// with thunk
store.dispatch( actions.fetchLocationFromIpInfo() )

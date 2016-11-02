//index of action creators in actions
import axios from 'axios'

export const addMovie = (title, year, platforms) => {
  return {
    type: 'ADD_MOVIE',
    title,
    year,
    platforms
  }
}

export const removeMovie = (title) => {
  return {
    type: 'REMOVE_MOVIE',
    title
  }
}

export const addHobby = (category, name) => {
  return {
    type: 'ADD_HOBBY',
    category,
    name
  }
}

export const removeHobby = (name) => {
  return {
    type: 'REMOVE_HOBBY',
    name
  }
}

export const startFetching = () => {
  return {
    type: 'START_FETCHING',
  }
}

export const completeFetching = (url) => {
  return {
    type: 'COMPLETE_FETCHING',
    url
  }
}

// async actions below
// you need thunk

//---- without thunk ----
/*
export const fetchLocationFromIpInfo = () => {
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
*/


//----- with thunk ------
export const fetchLocationFromIpInfo = () => {
  return (dispatch, getState) => {
    const url_info = 'http://ipinfo.io/json'
    dispatch(startFetching())
    axios.get(url_info)
      .then(res => {
        return res.data.loc
      })
      .then( loc => {
        const url_loc = 'http://maps.google.com?q=' + loc
        dispatch( completeFetching(url_loc) )
      })
      .catch( err => {
        return new Error('error location')
      })
  }
}

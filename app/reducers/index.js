export const movieReducer = (state = [], action) => {
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

export const hobbyReducer = (state = [], action) => {
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

export const mapReducer = (state = {isFetching: false, url: undefined}, action) => {
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

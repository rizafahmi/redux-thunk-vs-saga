const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_DATA':
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case 'FETCHING_DATA_SUCCESS':
      return {
        ...state,
        data: action.data,
        isFetching: false
      }
    case 'FETCHING_DATA_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}

export default dataReducer

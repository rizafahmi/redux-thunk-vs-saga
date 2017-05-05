export const getData = () => {
  return {
    type: 'FETCHING_DATA'
  }
}

export const getDataSuccess = (data) => {
  return {
    type: 'FETCHING_DATA_SUCCESS',
    data
  }
}

export const getDataFailure = () => {
  return {
    type: 'FETCHING_DATA_FAILURE'
  }
}

export const fetchData = () => {}

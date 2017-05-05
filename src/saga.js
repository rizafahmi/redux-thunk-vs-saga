import { put, takeEvery } from 'redux-saga/effects'

import getPeople from './api.js'

const fetchData = function * (action) {
  try {
    const data = yield getPeople()
    yield put({ type: 'FETCHING_DATA', data })
  } catch (e) {
    yield put({ type: 'FETCHING_DATA_FAILURE' })
  }
}

const dataSaga = function * () {
  yield takeEvery('FETCHING_DATA', fetchData)
}

export default dataSaga

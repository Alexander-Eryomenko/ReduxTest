import {put, call, takeEvery} from 'redux-saga/effects'
import { requestUsersInfo, requestUsersInfoSuccess, requestUsersInfoFail, REQUEST_USERS } from './actions/usersAction'
import { getUsersApi } from '../apiUsers'

export function* watchFetchUsers() {
  yield takeEvery(REQUEST_USERS, fetchUsersAsync)
}

export function* fetchUsersAsync() {
  try {
    yield put(requestUsersInfo())
    const data = yield call(getUsersApi)
    yield put(requestUsersInfoSuccess(data))
  } catch (error) {
    yield put(requestUsersInfoFail())
  }
}
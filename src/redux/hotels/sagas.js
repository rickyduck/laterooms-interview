import axios from 'axios';
import { select, call, put, takeLatest } from 'redux-saga/effects';
import { apiBaseEndpoint } from '../config/api';
import * as actions from './actions';

export function* fetchHotels() {
  const hotelsUrl = `${apiBaseEndpoint}/hotels`;
  yield put(actions.fetchHotelsStarted());

  try {
    const response = yield call(axios.get, hotelsUrl);
    yield put(actions.fetchHotelsSucceeded(response.data));
  } catch (e) {
    yield put(actions.fetchHotelsFailed(e.message));
  }
}

export function* fetchHotelsSaga() {
  yield takeLatest(actions.FETCH_HOTELS_REQUESTED, fetchHotels);
}

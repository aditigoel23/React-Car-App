/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { LOAD_CARS, REQ_PARAMS } from './constants';
import { carResultsLoaded, carResultsLoadingError } from './actions';
import { makeSelectPickupLocation, makeSelectPickupTime, makeSelectDropoffTime } from './selectors';

export function* searchCars() {
  // Select username from store
  const dest = yield select(makeSelectPickupLocation());
  const startDateTime = yield select(makeSelectPickupTime());
  const startDate = startDateTime.format('L');
  const startTime = startDateTime.format('HH:mm');
  const endDateTime = yield select(makeSelectDropoffTime());
  const endDate = endDateTime.format('L');
  const endTime = endDateTime.format('HH:mm');

  const requestUrl = `/api/searchCars?${REQ_PARAMS.DEST}=${dest}&${REQ_PARAMS.START_DATE}=${startDate}&${REQ_PARAMS.PICKUP_TIME}=${startTime}&${REQ_PARAMS.END_DATE}=${endDate}&${REQ_PARAMS.DROPOFF_TIME}=${endTime}`;
  try {
    // Call our request helper (see 'utils/request')
    const results = yield call(request, requestUrl);
    if (results.errorCode) {
      yield put(carResultsLoadingError(results));
    } else {
      yield put(carResultsLoaded(results));
    }
  } catch (err) {
    yield put(carResultsLoadingError(err));
  }
}


/**
 * Root saga manages watcher lifecycle
 */
export function* carsData() {
  const watcher = yield takeLatest(LOAD_CARS, searchCars);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  carsData,
];

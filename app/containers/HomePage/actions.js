import _ from 'lodash';
import * as constants from './constants';

/**
 * Actions related to home page container
 * @param location
 * @returns {{type, location: *}}
 */
export function changePickUpLocation(location) {
  return {
    type: constants.CHANGE_PICKUP_LOC,
    location,
  };
}

export function changePickUpDate(dateTime) {
  const pickupTime = dateTime;
  const dropOffTime = _.cloneDeep(dateTime).add(1, 'days');
  return {
    type: constants.CHANGE_PICKUP_DATE,
    pickupTime,
    dropOffTime,
  };
}

export function changePickUpTime(dateTime) {
  return {
    type: constants.CHANGE_PICKUP_TIME,
    dateTime,
  };
}

export function changeDropOffTime(dateTime) {
  return {
    type: constants.CHANGE_DROPOFF_TIME,
    dateTime,
  };
}

export function loadCars() {
  return {
    type: constants.LOAD_CARS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function carResultsLoaded(results) {
  return {
    type: constants.LOAD_CARS_SUCCESS,
    results,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function carResultsLoadingError(error) {
  return {
    type: constants.LOAD_CARS_ERROR,
    error,
  };
}

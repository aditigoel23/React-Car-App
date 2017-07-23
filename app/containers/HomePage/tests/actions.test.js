import * as constants from '../constants';

import * as actions from '../actions';

describe('Home Actions', () => {
  describe('changePickUpLocation', () => {
    it('should return the correct location', () => {
      const location = 'boston';
      const expectedResult = {
        type: constants.CHANGE_PICKUP_LOC,
        location,
      };

      expect(actions.changePickUpLocation(location)).toEqual(expectedResult);
    });
  });
  describe('changePickUpTime', () => {
    it('should return the correct time', () => {
      const dateTime = 'abc';
      const expectedResult = {
        type: constants.CHANGE_PICKUP_TIME,
        dateTime,
      };

      expect(actions.changePickUpTime(dateTime)).toEqual(expectedResult);
    });
  });
  describe('changeDropOffTime', () => {
    it('should return the correct time', () => {
      const dateTime = 'abc';
      const expectedResult = {
        type: constants.CHANGE_DROPOFF_TIME,
        dateTime,
      };

      expect(actions.changeDropOffTime(dateTime)).toEqual(expectedResult);
    });
  });
  describe('loadCars', () => {
    it('should call load cars', () => {
      const expectedResult = {
        type: constants.LOAD_CARS,
      };

      expect(actions.loadCars()).toEqual(expectedResult);
    });
  });
  describe('carResultsLoaded', () => {
    it('should return correct results', () => {
      const results = 'abc';
      const expectedResult = {
        type: constants.LOAD_CARS_SUCCESS,
        results,
      };

      expect(actions.carResultsLoaded(results)).toEqual(expectedResult);
    });
  });
  describe('carResultsLoadingError', () => {
    it('should return correct loading error', () => {
      const error = 'error';
      const expectedResult = {
        type: constants.LOAD_CARS_ERROR,
        error,
      };

      expect(actions.carResultsLoadingError(error)).toEqual(expectedResult);
    });
  });
});

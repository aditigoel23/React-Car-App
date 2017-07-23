import { fromJS } from 'immutable';
import moment from 'moment';
import homeReducer from '../reducer';
import {
  changePickUpLocation,
  changePickUpTime,
  changeDropOffTime,
  carResultsLoaded,
  carResultsLoadingError,
} from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      pickupLocation: null,
      pickupTime: moment(),
      dropoffTime: moment().add(1, 'days'),
      carsData: {
        loading: false,
        error: false,
        carResults: [],
        metaData: {},
      },
    });
  });

  it('should handle the changePickUpLocation action correctly', () => {
    const pickupLocation = 'abc';
    const expectedResult = state.set('pickupLocation', pickupLocation);

    expect(homeReducer(state, changePickUpLocation(pickupLocation))).toEqual(expectedResult);
  });
  it('should handle the changePickUpTime action correctly', () => {
    const pickupTime = 'abc';
    const expectedResult = state.set('pickupTime', pickupTime);

    expect(homeReducer(state, changePickUpTime(pickupTime))).toEqual(expectedResult);
  });
  it('should handle the changeDropOffTime action correctly', () => {
    const dropoffTime = 'abc';
    const expectedResult = state.set('dropoffTime', dropoffTime);

    expect(homeReducer(state, changeDropOffTime(dropoffTime))).toEqual(expectedResult);
  });
  it('should handle the carResultsLoaded action correctly', () => {
    const results = {
      Result: 'abc',
      MetaData: { CarMetaData: 'xyz' },
    };
    const expectedResult = state.setIn(['carsData', 'carResults'], 'abc')
      .setIn(['carsData', 'metaData'], 'xyz')
      .setIn(['carsData', 'loading'], false);

    expect(homeReducer(state, carResultsLoaded(results))).toEqual(expectedResult);
  });
  it('should handle the carResultsLoadingError action correctly', () => {
    const error = 'error';
    const expectedResult = state.setIn(['carsData', 'error'], true).setIn(['carsData', 'loading'], false);

    expect(homeReducer(state, carResultsLoadingError(error))).toEqual(expectedResult);
  });
});

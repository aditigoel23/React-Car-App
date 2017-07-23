import { fromJS } from 'immutable';
import moment from 'moment';
import * as constants from './constants';

const initialState = fromJS({
  pickupLocation: null,
  pickupTime: moment().add(1, 'days').hour(12).minute(0),
  dropoffTime: moment().add(2, 'days').hour(12).minute(0),
  carsData: {
    loading: false,
    error: false,
    carResults: [],
    metaData: {},
  },
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case constants.CHANGE_PICKUP_LOC:
      return state
        .set('pickupLocation', action.location);
    case constants.CHANGE_PICKUP_DATE:
      return state
        .set('pickupTime', action.pickupTime)
        .set('dropoffTime', action.dropOffTime);
    case constants.CHANGE_PICKUP_TIME:
      return state
        .set('pickupTime', action.dateTime)
    case constants.CHANGE_DROPOFF_TIME:
      return state
        .set('dropoffTime', action.dateTime);
    case constants.LOAD_CARS:
      return state
        .setIn(['carsData', 'loading'], true)
        .setIn(['carsData', 'error'], false)
        .setIn(['carsData', 'carResults'], []);
    case constants.LOAD_CARS_SUCCESS:
      return state
        .setIn(['carsData', 'carResults'], action.results.Result)
        .setIn(['carsData', 'metaData'], action.results.MetaData ? action.results.MetaData.CarMetaData : {})
        .setIn(['carsData', 'loading'], false);
    case constants.LOAD_CARS_ERROR:
      return state
        .setIn(['carsData', 'error'], true)
        .setIn(['carsData', 'loading'], false);

    default:
      return state;
  }
}

export default homePageReducer;

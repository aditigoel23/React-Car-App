import { fromJS } from 'immutable';
import moment from 'moment';
import {
  selectHome,
  makeSelectCarResults,
  makeSelectCarsLoading,
  makeSelectCarsLoadingError,
  makeSelectDropoffTime,
  makeSelectMetaData,
  makeSelectPickupLocation,
  makeSelectPickupTime,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = fromJS({
      pickupLocation: null,
      pickupTime: moment(),
      dropoffTime: moment().add(1, 'days'),
      carsData: {
        loading: false,
        error: false,
        carResults: [],
        metaData: [],
      },
    });
    const mockedState = fromJS({
      home: homeState,
    });
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectCarResults', () => {
  const selector = makeSelectCarResults();
  const mockedState = fromJS({
    home: {
      carsData: {
        carResults: 'abc',
      },
    },
  });
  expect(selector(mockedState)).toEqual('abc');
});

describe('makeSelectCarsLoading', () => {
  const selector = makeSelectCarsLoading();
  const mockedState = fromJS({
    home: {
      carsData: {
        loading: true,
      },
    },
  });
  expect(selector(mockedState)).toEqual(true);
});

describe('makeSelectCarsLoadingError', () => {
  const selector = makeSelectCarsLoadingError();
  const mockedState = fromJS({
    home: {
      carsData: {
        error: true,
      },
    },
  });
  expect(selector(mockedState)).toEqual(true);
});

describe('makeSelectDropoffTime', () => {
  const selector = makeSelectDropoffTime();
  const mockedState = fromJS({
    home: {
      dropoffTime: 'abc',
    },
  });
  expect(selector(mockedState)).toEqual('abc');
});

describe('makeSelectMetaData', () => {
  const selector = makeSelectMetaData();
  const mockedState = fromJS({
    home: {
      carsData: {
        metaData: 'abc',
      },
    },
  });
  expect(selector(mockedState)).toEqual('abc');
});

describe('makeSelectPickupLocation', () => {
  const selector = makeSelectPickupLocation();
  const mockedState = fromJS({
    home: {
      pickupLocation: 'abc',
    },
  });
  expect(selector(mockedState)).toEqual('abc');
});

describe('makeSelectPickupTime', () => {
  const selector = makeSelectPickupTime();
  const mockedState = fromJS({
    home: {
      pickupTime: 'abc',
    },
  });
  expect(selector(mockedState)).toEqual('abc');
});

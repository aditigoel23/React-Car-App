/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

export const selectHome = (state) => state.get('home');

export const makeSelectPickupLocation = () => createSelector(
  selectHome,
  (homeState) => homeState.get('pickupLocation')
);

export const makeSelectPickupTime = () => createSelector(
    selectHome,
    (homeState) => homeState.get('pickupTime')
);

export const makeSelectDropoffTime = () => createSelector(
    selectHome,
    (homeState) => homeState.get('dropoffTime')
);

export const makeSelectCarsLoading = () => createSelector(
    selectHome,
    (homeState) => homeState.get('carsData').get('loading')
);

export const makeSelectCarsLoadingError = () => createSelector(
    selectHome,
    (homeState) => homeState.get('carsData').get('error')
);

export const makeSelectCarResults = () => createSelector(
    selectHome,
    (homeState) => homeState.get('carsData').get('carResults')
);

export const makeSelectMetaData = () => createSelector(
    selectHome,
    (homeState) => homeState.get('carsData').get('metaData')
);

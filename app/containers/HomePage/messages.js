/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.HomePage.header',
    defaultMessage: 'This is HomePage component!',
  },
  sideNav: {
    pickupLocationLabel: 'Pick up location',
    dropOffLocationLabel: 'Drop off location',
    pickupTimeLabel: 'Pick-up time',
    dropOffTimeLabel: 'Drop-off time',
  },
  mainContent: {
    emptyMessage: {
      id: 'rentalApp.containers.HomePage.emptySection',
      defaultMessage: 'Placeholder',
    },
    searchError: {
      id: 'rentalApp.containers.HomePage.searchError',
      defaultMessage: 'Something went wrong. Please select another location or try different times',
    },
  },
});

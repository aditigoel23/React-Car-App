/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 * For now this will just render the needed 2 columns with the nav and the content areas.
 * Eventually main content would be where diff contents get loaded based on routes.
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import ColumnLayout from './ColumnLayout';
import SideNav from './sideNav';
import MainContent from './mainContent';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ColumnLayout>
        <SideNav />
        <MainContent />
      </ColumnLayout>
    );
  }
}

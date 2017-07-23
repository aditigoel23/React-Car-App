/**
 * Test the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../index';
import ColumnLayout from '../ColumnLayout';
import SideNav from '../sideNav';
import MainContent from '../mainContent';

describe('<HomePage />', () => {
  it('should render a ColumnLayout', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.find(ColumnLayout).length).toBe(1);
  });
  it('should render a SideNav', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.find(SideNav).length).toBe(1);
  });
  it('should render a MainContent', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.find(MainContent).length).toBe(1);
  });
});

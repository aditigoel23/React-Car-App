import React from 'react';
import { mount } from 'enzyme';
import VirtualizedSelect from 'react-virtualized-select';
import Label from '../../Label/index';

import LocationPicker from '../index';

describe('<LocationPicker />', () => {
  it('should render Select', () => {
    const renderedComponent = mount(
      <LocationPicker />
    );
    expect(renderedComponent.find(VirtualizedSelect).length).toBe(1);
  });
  it('should render label when prop is set', () => {
    const renderedComponent = mount(
      <LocationPicker label="test" />
    );
    expect(renderedComponent.contains(<Label>{'test'}</Label>)).toEqual(true);
  });
});


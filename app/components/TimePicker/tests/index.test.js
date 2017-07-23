import React from 'react';
import { mount } from 'enzyme';
import Select from 'react-select';
import TimePicker from '../index';

describe('<TimePicker />', () => {
  it('should render Select', () => {
    const renderedComponent = mount(
      <TimePicker />
    );
    expect(renderedComponent.find(Select).length).toBe(1);
  });
});

import React from 'react';
import { mount } from 'enzyme';
import ReactDatePicker from 'react-datepicker';
import TimePicker from '../../TimePicker/index';
import Label from '../../Label/index';
import DateTimePicker from '../index';

describe('<DateTimePicker />', () => {
  it('should render label when prop is set', () => {
    const renderedComponent = mount(
      <DateTimePicker label="test" />
    );
    expect(renderedComponent.contains(<Label>{'test'}</Label>)).toEqual(true);
  });
  it('should render datePicker', () => {
    const renderedComponent = mount(
      <DateTimePicker />
    );
    expect(renderedComponent.find(ReactDatePicker).length).toBe(1);
  });
  it('should render timePicker', () => {
    const renderedComponent = mount(
      <DateTimePicker />
    );
    expect(renderedComponent.find(TimePicker).length).toBe(1);
  });
});

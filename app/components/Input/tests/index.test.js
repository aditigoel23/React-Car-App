import React from 'react';
import { mount } from 'enzyme';
import Input from '../index';
import Label from '../../Label/index';

describe('<Input />', () => {
  it('should render an input', () => {
    const renderedComponent = mount(
      <Input />
    );
    expect(renderedComponent.find('input').length).toBe(1);
  });

  it('should render label when prop is set', () => {
    const renderedComponent = mount(
      <Input label="test" />
    );
    expect(renderedComponent.contains(<Label>{'test'}</Label>)).toEqual(true);
  });
});

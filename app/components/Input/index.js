import React from 'react';
import Label from '../Label/index';
import InputStyles from './InputStyles';

export default class Input extends React.Component {
  onChange = (evt) => {
    if (this.props.onChange) {
      this.props.onChange(evt.target.value);
    }
  };

  render() {
    return (
      <div>
        {this.props.label && <Label>{this.props.label}</Label>}
        <InputStyles placeholder="Enter a location" onChange={this.onChange} value={this.props.value} />
      </div>
    );
  }
}

Input.propTypes = {
  value: React.PropTypes.string,
  label: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

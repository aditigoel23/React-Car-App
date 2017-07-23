import React from 'react';
import Select from 'react-select';
import moment from 'moment';

import '!!style-loader!css-loader!../../../node_modules/react-select/dist/react-select.min.css';

export default class TimePicker extends React.Component {
  onChange = (option) => {
    this.props.onChange(option ? option.value : null);
  };
  getDropDownOptions() {
    const map = [];
    const time = moment().startOf('day');
    const endOfDay = moment().endOf('day');

    //  Loop until we are on the next day
    while (time.isBefore(endOfDay)) {
      map.push({ value: time.format('HH:mm'), label: time.format('hh:mm a') });
      time.add(30, 'm');
    }
    return map;
  }

  render() {
    const selectedValue = this.props.value ? this.props.value.format('HH:mm') : '12:00';
    return (
      <Select
        options={this.getDropDownOptions()}
        value={selectedValue}
        onChange={this.onChange}
        clearable={false}
      />
    );
  }
}

TimePicker.propTypes = {
  value: React.PropTypes.object,
  onChange: React.PropTypes.func,
};

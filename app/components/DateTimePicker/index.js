import React from 'react';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';

import '!!style-loader!css-loader!../../../node_modules/react-datepicker/dist/react-datepicker.min.css';
import '!!style-loader!css-loader!./DatePicker.css';
import Label from '../Label/index';
import TimePicker from '../TimePicker/index';
/**
 * Component that renders a set of label + a datepicker + a time picker
 * Date and time picker could be refactored into separate components
 */
export default class DateTimePicker extends React.Component {
  onChangeDate = (value) => {
    const currentDate = this.props.value;
    const currentHours = currentDate.format('HH');
    const currentMins = currentDate.format('mm');
    const newDateTime = value.hour(currentHours).minute(currentMins);
    if (this.props.onDateChange) {
      this.props.onDateChange(newDateTime);
    } else if (this.props.onChange) {
      this.props.onChange(newDateTime);
    }
  };
  onChangeTime = (value) => {
    const currentDate = this.props.value;
    let newDateTime = `${moment(currentDate).format('YYYY-MM-DD')} ${value}`;
    newDateTime = moment(newDateTime);
    if (this.props.onTimeChange) {
      this.props.onTimeChange(newDateTime);
    } else if (this.props.onChange) {
      this.props.onChange(newDateTime);
    }
  };

  render() {
    const selectedDateTime = this.props.value;
    return (
      <div className="dateTimePicker">
        {this.props.label && <Label>{this.props.label}</Label>}
        <ReactDatePicker
          minDate={this.props.minDate}
          maxDate={this.props.maxDate}
          selected={selectedDateTime}
          onChange={this.onChangeDate}
        />
        <TimePicker value={selectedDateTime} onChange={this.onChangeTime} />
      </div>
    );
  }
}

DateTimePicker.propTypes = {
  minDate: React.PropTypes.object,
  maxDate: React.PropTypes.object,
  value: React.PropTypes.object,
  label: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onDateChange: React.PropTypes.func,
  onTimeChange: React.PropTypes.func,
};

import React from 'react';

import AirportCodes from 'airport-codes/airports.json';
import VirtualizedSelect from 'react-virtualized-select';
import _ from 'lodash';
import '!!style-loader!css-loader!../../../node_modules/react-select/dist/react-select.min.css';
import '!!style-loader!css-loader!../../../node_modules/react-virtualized-select/styles.css';
import '!!style-loader!css-loader!./LocationPicker.css';
import Label from '../Label/index';

class LocationPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
  }

  onChange = (value) => {
    if (this.props.onChange) {
      this.props.onChange(value ? value.value : null);
    }
  };

  filterOptions = (options, filterString) => {
    const filterStringCaps = filterString.toUpperCase();
    return _.filter(options, (option) => option.iata === filterStringCaps || option.value.indexOf(filterStringCaps) !== -1 || option.city.indexOf(filterStringCaps) !== -1);
  };

  render() {
    const options = _.map(AirportCodes, (airport) => ({ value: airport.name.toUpperCase(), label: airport.name, iata: airport.iata.toUpperCase(), city: airport.city.toUpperCase() }));
    return (
      <div>
        {this.props.label && <Label>{this.props.label}</Label>}
        <VirtualizedSelect
          filterOptions={this.filterOptions}
          options={options}
          value={this.props.value}
          onChange={this.onChange}
          clearable={false}
        />
      </div>
    );
  }
}

LocationPicker.propTypes = {
  onChange: React.PropTypes.func,
  label: React.PropTypes.string,
  value: React.PropTypes.string,
};

export default LocationPicker;

/**
 * Created by agoel on 7/18/17.
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import _ from 'lodash';
import moment from 'moment';
import messages from './messages';
import LocationPicker from '../../components/LocationPicker/index';
import DateTimePicker from '../../components/DateTimePicker/index';
import Button from '../../components/Button/index';
import Section from './Section';
import SideNavItem from '../../components/SideNavItem/StyledSideNavItem';
import { makeSelectPickupLocation, makeSelectPickupTime, makeSelectDropoffTime } from './selectors';
import { changePickUpLocation, changePickUpDate, changePickUpTime, changeDropOffTime, loadCars } from './actions';

class SideNav extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const enableSearch = this.props.pickupLocation && this.props.pickupTime && this.props.dropoffTime;
    const minPickupDate = moment().add(1, 'days'); // Hotwire api doesnt let you book anything with pick up time less than 24 hours from time of booking
    const maxPickupDate = moment().add(330, 'days'); // Hotwire api only lets you book within next 330 days
    const pickupTime = _.cloneDeep(this.props.pickupTime);
    const minDropOffDate = this.props.pickupTime;
    const maxDropOffDate = pickupTime ? (pickupTime).add(60, 'days') : null; // Hotwire api only lets you book for an interval of 60 days
    return (
      <Section>
        <SideNavItem>
          <LocationPicker onChange={this.props.changePickUpLocation} label={messages.sideNav.pickupLocationLabel} value={this.props.pickupLocation} />
        </SideNavItem>
        <SideNavItem>
          <DateTimePicker onDateChange={this.props.changePickUpDate} onTimeChange={this.props.changePickUpTime} label={messages.sideNav.pickupTimeLabel} value={this.props.pickupTime} minDate={minPickupDate} maxDate={maxPickupDate} />
        </SideNavItem>
        <SideNavItem>
          <DateTimePicker onChange={this.props.changeDropOffTime} label={messages.sideNav.dropOffTimeLabel} value={this.props.dropoffTime} minDate={minDropOffDate} maxDate={maxDropOffDate} />
        </SideNavItem>
        <SideNavItem>
          <Button disabled={!enableSearch} onClick={this.props.loadCars}>Search</Button>
        </SideNavItem>
      </Section>
    );
  }
}

SideNav.propTypes = {
  pickupTime: React.PropTypes.object,
  dropoffTime: React.PropTypes.object,
  pickupLocation: React.PropTypes.string,
  loadCars: React.PropTypes.func,
  changePickUpDate: React.PropTypes.func,
  changeDropOffTime: React.PropTypes.func,
  changePickUpTime: React.PropTypes.func,
  changePickUpLocation: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  pickupLocation: makeSelectPickupLocation(),
  pickupTime: makeSelectPickupTime(),
  dropoffTime: makeSelectDropoffTime(),
});

const mapDispatchToProps = {
  changePickUpLocation, changePickUpDate, changePickUpTime, changeDropOffTime, loadCars,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);

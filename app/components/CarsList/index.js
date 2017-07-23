import React from 'react';
import _ from 'lodash';
import CarListItem from '../CarListItem/index';
import Wrapper from './Wrapper';

function CarsList(props) {
  const carTypes = _.get(props, 'metaData.CarTypes', []);
  let list = [];
  if (Array.isArray(props.items)) {
    list = _.map(props.items, (car) =>
      <CarListItem key={car.ResultId} types={carTypes} item={car} />
    );
  }

  return (
    <Wrapper>
      {list}
    </Wrapper>
  );
}

CarsList.propTypes = {
  items: React.PropTypes.array,
};

export default CarsList;

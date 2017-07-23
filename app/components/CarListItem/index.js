import React from 'react';
import _ from 'lodash';
import Item from './Item';
import Wrapper from './Wrapper';

function CarsListItem(props) {
  const carMetaData = _.find(props.types, (type) => type.CarTypeCode === props.item.CarTypeCode);
  return (
    <Wrapper>
      <Item className="item">
        <span className="type">{carMetaData.CarTypeName}</span>
        <span><span className="currency">{props.item.CurrencyCode} </span> {props.item.DailyRate} <span className="perDay"> /day</span></span>
        <span className="total">{props.item.TotalPrice} total</span>
      </Item>
    </Wrapper>
  );
}

CarsListItem.propTypes = {
  item: React.PropTypes.object,
  types: React.PropTypes.array,
};

export default CarsListItem;

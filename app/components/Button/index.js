/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { PropTypes, Children } from 'react';

import StyledButton from './StyledButton';
import Wrapper from './Wrapper';

function Button(props) {
  const button = (
    <StyledButton onClick={props.onClick} disabled={props.disabled}>
      {Children.toArray(props.children)}
    </StyledButton>
  );

  return (
    <Wrapper>
      {button}
    </Wrapper>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export default Button;

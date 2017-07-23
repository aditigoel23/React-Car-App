import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import H1 from '../H1';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar>
          <H1>
            <FormattedMessage {...messages.home} />
          </H1>
        </NavBar>
      </div>
    );
  }
}

export default Header;

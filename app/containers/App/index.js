/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';

import Header from 'components/Header';
import withProgressBar from 'components/ProgressBar';

const AppWrapper = styled.div`
  max-width: 1000px;
  margin: 20px auto 0 auto;
  display: flex;
  min-height: 100%;
  padding: 20px 16px;
  flex-direction: column;
`;

export function App(props) {
  return (
    <div>
      <Header />
      <AppWrapper>
        {React.Children.toArray(props.children)}
      </AppWrapper>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);

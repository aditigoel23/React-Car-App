/**
 * Created by agoel on 7/18/17.
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Section from './Section';
import EmptySection from './EmptySection';
import CarsList from '../../components/CarsList/index';
import LoadingIndicator from '../../components/LoadingIndicator/index';
import { makeSelectCarsLoading, makeSelectCarsLoadingError, makeSelectCarResults, makeSelectMetaData } from './selectors';

class MainContent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.loading) {
      return <EmptySection><LoadingIndicator /></EmptySection>;
    }
    if (this.props.error) {
      return <EmptySection><FormattedMessage {...messages.mainContent.searchError} /></EmptySection>;
    }
    if (this.props.carsList && this.props.carsList.length) {
      return (<Section>
        <CarsList items={this.props.carsList} metaData={this.props.metaData} />
      </Section>
      );
    }
    return <EmptySection><FormattedMessage {...messages.mainContent.emptyMessage} /></EmptySection>;
  }
}

MainContent.propTypes = {
  carsList: React.PropTypes.object,
  loading: React.PropTypes.bool,
  metaData: React.PropTypes.object,
  error: React.PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectCarsLoading(),
  error: makeSelectCarsLoadingError(),
  carsList: makeSelectCarResults(),
  metaData: makeSelectMetaData(),
});

export default connect(mapStateToProps)(MainContent);

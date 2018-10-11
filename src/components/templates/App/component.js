import React, { Component, Fragment as f } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from '../../atoms/Header';
import HotelListings from '../../organisms/HotelListings';

import './styles.css';

class AppComponent extends Component {
  render() {
    const { hotels } = this.props;
    return (
      <div className="App">
        {(hotels.fetching && <CircularProgress size={50} />) || (
          <f>
            <Header title="Property Search" />
            <HotelListings list={this.props.hotels.list} />
          </f>
        )}
      </div>
    );
  }
}

AppComponent.propTypes = {
  hotels: PropTypes.object.isRequired
};

export default AppComponent;

import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchHotelsRequested } from '../../../redux/hotels/actions';
import AppComponent from './component';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    if (props.hotels.list.length < 1) props.fetchHotels();
  }
  render() {
    return (
      (this.props.hotels.loading && <div data->Loading</div>) || (
        <AppComponent hotels={this.props.hotels} />
      )
    );
  }
}

const mapStateToProps = state => ({
  hotels: state.hotels
});

const mapDispatchToProps = dispatch => ({
  fetchHotels: () => dispatch(fetchHotelsRequested())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);

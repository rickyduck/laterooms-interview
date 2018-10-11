import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import HotelListing from '../../molecules/HotelListing';

const HotelListings = props => (
  <Grid container style={{ marginTop: 30 }} spacing={24}>
    {props.list.map(hotel => (
      <Grid key={hotel.name} item xs={3}>
        <HotelListing {...hotel} />
      </Grid>
    ))}
  </Grid>
);

HotelListings.propTypes = {
  list: PropTypes.array.isRequired
};

export default HotelListings;

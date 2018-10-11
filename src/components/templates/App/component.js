import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from '../../atoms/Header';
import MultipleSelect from '../../atoms/MultipleSelect';
import Select from '../../atoms/SimpleSelect';
import HotelListings from '../../organisms/HotelListings';

import './styles.css';

const orderByOptions = [
  { label: 'Highest Star Rating', value: 'asc' },
  { label: 'Lowest Star Rating', value: 'desc' }
];

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredList: [],
      filters: [],
      orderBy: orderByOptions[0]
    };
    this.filterProperties = this.filterProperties.bind(this);
    this.orderProperties = this.orderProperties.bind(this);
  }

  filterProperties(filters = []) {
    let filteredList = this.props.hotels.list;
    if (filters.length) {
      filteredList = filteredList.filter(hotel => {
        let doReturn = false;
        hotel.facilities.forEach(facility => {
          if (filters.indexOf(facility) > -1) doReturn = true;
        });
        return doReturn;
      });
    }
    this.setState({
      filteredList,
      filters
    });
  }

  orderProperties(orderBy = this.state.orderBy) {
    const filteredList = this.state.filteredList.sort((a, b) => {
      let comparison = 0;

      if (a.starRating > b.starRating) {
        comparison = orderBy.value === 'desc' ? 1 : -1;
      } else if (b.starRating > a.starRating) {
        comparison = orderBy.value === 'desc' ? -1 : 1;
      }

      return comparison;
    });
    this.setState({
      orderBy,
      filteredList
    });
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.hotels.list.length) {
      this.setState({
        filteredList: this.props.hotels.list
      });
      this.filterProperties();
    }
  }
  render() {
    const { hotels } = this.props;
    return (
      <div className="App">
        {(hotels.fetching && <CircularProgress size={50} />) || (
          <Fragment>
            <Header title="Property Search" />
            <MultipleSelect
              items={this.props.hotels.filters.facilities}
              filters={this.state.filters}
              label="Facilities"
              onChange={this.filterProperties}
            />
            <Select
              label="Order By"
              value={this.state.orderBy.value}
              items={orderByOptions}
              onChange={this.orderProperties}
            />
            <HotelListings list={this.state.filteredList} />
          </Fragment>
        )}
      </div>
    );
  }
}

AppComponent.propTypes = {
  hotels: PropTypes.object.isRequired
};

export default AppComponent;

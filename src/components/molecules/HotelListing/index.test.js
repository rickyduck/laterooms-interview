import React from 'react';
import { render } from 'react-testing-library';

import HotelListing from './';
import mockHotels from '../../../../__mocks__/hotels';

const mh = mockHotels[0];

test('Renders HotelListing correctly', () => {
  const { container } = render(<HotelListing {...mh} />);
  expect(container).toMatchSnapshot();
});

import React from 'react';
import { render } from 'react-testing-library';
import mockHotels from '../../../../__mocks__/hotels';

import HotelListings from './';

test('Renders HotelListings correctly', () => {
  const { container } = render(<HotelListings list={mockHotels} />);
  expect(container).toMatchSnapshot();
});

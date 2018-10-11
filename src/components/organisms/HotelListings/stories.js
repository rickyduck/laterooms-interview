import React from 'react';

import { storiesOf } from '@storybook/react';
import HotelListings from './';

import mockHotels from '../../../../__mocks__/hotels';

const stories = storiesOf('Organisms', module);

stories.add('HotelListings', () => <HotelListings list={mockHotels} />);

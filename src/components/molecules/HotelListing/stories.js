import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';
import HotelListing from './';

import mockHotels from '../../../../__mocks__/hotels';

const mh = mockHotels[0];
const stories = storiesOf('Molecules', module);
stories.addDecorator(withKnobs);

stories.add('HotelListing', () => (
  <HotelListing
    title={text('Title', mh.title)}
    name={text('Name', mh.name)}
    starRating={text('Star Rating', mh.starRating)}
    image={text('Image', mh.image)}
  />
));

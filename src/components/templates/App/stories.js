import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';
import { AppComponent } from './';

import mockHotels from '../../../../__mocks__/hotels';

const props = {
  hotels: {
    fecthing: boolean('Fetching', true),
    list: mockHotels,
    error: null
  }
};

const stories = storiesOf('Templates', module);
stories.addDecorator(withKnobs);

stories.add('AppComponent', () => <AppComponent {...props} />);

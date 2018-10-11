import React from 'react';
import ReactDOM from 'react-dom';
import { AppComponent } from './';
import mockHotels from '../../../../__mocks__/hotels';

const props = {
  hotels: {
    fecthing: false,
    list: mockHotels,
    error: null
  }
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppComponent {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

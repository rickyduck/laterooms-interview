import React from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import { render, cleanup } from 'react-testing-library';

import Store from '../../../redux/store';

import App from './container';

afterEach(cleanup);

// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState or the entire store that the ui is rendered with
function renderWithRedux(ui) {
  return {
    ...render(<Provider store={Store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
}

test('can render with redux with defaults', () => {
  const { getByText } = renderWithRedux(<App />);
  expect(getByText('Loading')).toBeTruthy;
});

import React from 'react';
import { render } from 'react-testing-library';

import Rating from './';

test('Renders Rating correctly', () => {
  const { container } = render(<Rating max={5} value={1} />);
  expect(container).toMatchSnapshot();
});

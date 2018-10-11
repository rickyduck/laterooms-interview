import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';
import Rating from './';

const stories = storiesOf('Atoms', module);
stories.addDecorator(withKnobs);

stories.add('Rating', () => (
  <Rating value={number('Value', 3)} max={number('Max', 5)} />
));

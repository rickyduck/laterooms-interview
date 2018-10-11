import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';
import Header from './';

const stories = storiesOf('Atoms', module);
stories.addDecorator(withKnobs);

stories.add('Header', () => (
  <Header title={text('Title', 'Welcome to Laterooms')} />
));

import React from 'react';
import { withKnobs, text, array, select } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';
import { action, configureActions } from '@storybook/addon-actions';

import SimpleSelect from './';

const orderByOptions = [
  { label: 'Highest Star Rating', value: 'asc' },
  { label: 'Lowest Star Rating', value: 'desc' }
];
const stories = storiesOf('Atoms', module);
stories.addDecorator(withKnobs);
const items = ['Item 1', 'Item 2'];
stories.add('SimpleSelect', () => (
  <SimpleSelect
    items={array('Options', orderByOptions)}
    value={select('Value', ['asc', 'desc'])}
    label={text('Label', 'Select Label')}
    onChange={action('Item Clicked')}
  />
));

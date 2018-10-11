import React from 'react';
import { withKnobs, text, array } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';
import { action, configureActions } from '@storybook/addon-actions';

import MultipleSelect from './';

const stories = storiesOf('Atoms', module);
stories.addDecorator(withKnobs);
const items = ['Item 1', 'Item 2'];
stories.add('MultipleSelect', () => (
  <MultipleSelect
    items={array('Items', ['Item 1', 'Item 2', 'Item 3', 'Item 4'])}
    filters={array('Selected Items', ['Item 2'])}
    label={text('Label', 'Select Label')}
    onChange={action('Item Clicked')}
  />
));

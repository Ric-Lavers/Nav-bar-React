import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import SignUpForm from '../src/components/SignUpForm'



storiesOf('navigation bar', module).add('this is the nav bar', () => <SignUpForm/>
);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}> YOYOY Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import {text} from '@storybook/addon-knobs';
import React from 'react';
import {Button} from './Button';

storiesOf('Button aswe', module)
  .add('with text', () => (
    <Button onPress={action('clicked-text')} label={text('label', 'hai')} />
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-text')} label="😀 😎 👍 💯" />
  ));

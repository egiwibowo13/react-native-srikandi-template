/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from '@appredux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from '@shopify/restyle';
import NavigationContainer from './app/routes/NavigationContainer';
import StorybookUIRoot from './storybook';
import theme from '@styles/theme';

const STORYBOOK_START = false;

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <NavigationContainer />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default STORYBOOK_START ? StorybookUIRoot : App;

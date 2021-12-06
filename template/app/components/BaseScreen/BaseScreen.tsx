import React, {useRef, useImperativeHandle} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SnackBar, SnackBarActionsParams} from '../SnackBar';
import {VerticalBox} from '../Box';

export type BaseScreenProps = React.ComponentProps<typeof VerticalBox>;

export type BaseScreen = {
  showSnackBar: (params: SnackBarActionsParams) => void;
};

export const BaseScreen = React.forwardRef<BaseScreen, BaseScreenProps>(
  ({children, ...props}, ref) => {
    const snackBarRef = useRef<SnackBar>(null);
    const isDarkMode = useColorScheme() === 'dark';

    useImperativeHandle(ref, () => ({
      showSnackBar: (params: SnackBarActionsParams) => {
        snackBarRef.current?.show(params);
      },
    }));
    return (
      <VerticalBox backgroundColor="mainBackground" {...props}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <SnackBar ref={snackBarRef} />
        {children}
      </VerticalBox>
    );
  },
);

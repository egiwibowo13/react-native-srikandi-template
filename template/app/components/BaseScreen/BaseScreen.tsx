import React, {useRef, useImperativeHandle} from 'react';
import {SnackBar, SnackBarHandle, SnackBarActionsParams} from '../SnackBar';
import {VerticalBox} from '../Box';

export type BaseScreenProps = React.ComponentProps<typeof VerticalBox>;

export type BaseScreen = {
  showSnackBar: (params: SnackBarActionsParams) => void;
};

export const BaseScreen = React.forwardRef<BaseScreen, BaseScreenProps>(
  ({children, ...props}, ref) => {
    const snackBarRef = useRef<SnackBarHandle>(null);

    useImperativeHandle(ref, () => ({
      showSnackBar: (params: SnackBarActionsParams) => {
        snackBarRef.current?.show(params);
      },
    }));
    return (
      <VerticalBox backgroundColor="mainBackground" {...props}>
        <SnackBar ref={snackBarRef} />
        {children}
      </VerticalBox>
    );
  },
);

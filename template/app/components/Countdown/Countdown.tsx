import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';
import {Text} from '../Text';

type CountdownProps = React.ComponentProps<typeof Text> & {
  initialCount: number;
  format: 'hh:mm:ss' | 'mm:ss';
};
export type Countdown = {
  start: () => void;
  stop: () => void;
  reset: () => void;
};

enum Status {
  STARTED = 'Started',
  STOPPED = 'Stopped',
}
export const Countdown = forwardRef<Countdown, CountdownProps>((props, ref) => {
  const {initialCount, format, ...rest} = props;
  const [secondsRemaining, setSecondsRemaining] = useState(initialCount);
  const [status, setStatus] = useState(Status.STOPPED);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(Status.STOPPED);
      }
    },
    status === Status.STARTED ? 1000 : null,
    // passing null stops the interval
  );
  useImperativeHandle(ref, () => ({
    start: () => setStatus(Status.STARTED),
    stop: () => setStatus(Status.STOPPED),
    reset: () => {
      setStatus(Status.STOPPED);
      setSecondsRemaining(initialCount);
    },
  }));
  console.log({hoursToDisplay});
  switch (format) {
    case 'mm:ss':
      return (
        <Text variant="body2" {...rest}>
          {`${twoDigits(minutesToDisplay + hoursToDisplay * 60)}:${twoDigits(
            secondsToDisplay,
          )}`}
        </Text>
      );
    default:
      return (
        <Text variant="body2" {...rest}>
          {`${twoDigits(hoursToDisplay)}:${twoDigits(
            minutesToDisplay,
          )}:${twoDigits(secondsToDisplay)}`}
        </Text>
      );
  }
});

const twoDigits = (num: number) => String(num).padStart(2, '0');

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = React.useRef<() => void>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback?.current?.();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

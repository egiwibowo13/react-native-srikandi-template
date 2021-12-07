import React, {useRef, useEffect, forwardRef, useImperativeHandle} from 'react';
import {VerticalBox} from '../Box';
import {Otp} from '../Otp';
import {Text} from '../Text';
import {Countdown} from '../Countdown';
import {Button} from '../Button';

type FormOtpProps = {
  phoneNumber: string;
  onPress: (otp: string) => void;
};

type FormOtp = {
  setOtp: (otp: string) => void;
  setError: (error: string) => void;
};

const Constants = {
  COUNTDOWN: 60 * 60 * 2, // in second
  MESSAGE: (phoneNumber: string) =>
    `Masukkan kode OTP yang telah dikirimkan ke ${phoneNumber}`,
};
export const FormOtp = forwardRef<FormOtp, FormOtpProps>((props, ref) => {
  const {onPress, phoneNumber} = props;
  const [otp, setOtp] = React.useState('');
  const [error, setError] = React.useState('');

  const countdown = useRef<Countdown>(null);

  useEffect(() => {
    countdown.current?.start();
  }, []);

  useImperativeHandle(ref, () => ({
    setOtp: (_otp: string) => setOtp(_otp),
    setError: (_error: string) => setError(_error),
  }));

  return (
    <VerticalBox minHeight="35%" maxHeight="100%">
      <Text variant="caption" alignSelf="center">
        {Constants.MESSAGE(phoneNumber)}
      </Text>
      <Otp
        size={6}
        value={otp}
        onChangeValue={x => {
          setOtp(x);
          setError('');
        }}
        error={error}
        marginVertical="l"
      />
      <Countdown
        ref={countdown}
        initialCount={Constants.COUNTDOWN}
        format="mm:ss"
        alignSelf="center"
      />
      <Button
        label="Confirm"
        variant="primary"
        onPress={() => onPress(otp)}
        position="absolute"
        bottom={0}
        marginVertical="xl"
      />
    </VerticalBox>
  );
});

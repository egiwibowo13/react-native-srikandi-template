import React from 'react';
import {TextInput as RNTextInput} from 'react-native';
import {HorizontalBox, VerticalBox} from '../Box';
import {TextInput} from '../FieldLabel';
import {Text} from '../Text';

type OtpProps = React.ComponentProps<typeof VerticalBox> & {
  value: string;
  size: number;
  onChangeValue: (value: string) => void;
  error?: string;
};

function createArrayValue(size: number, value: string): string[] {
  const result: string[] = [];
  for (let index = 0; index < size; index++) {
    result.push(value.charAt(index));
  }
  return result;
}

export const Otp = (props: OtpProps) => {
  const {size, value, onChangeValue, error, ...rest} = props;

  const values = createArrayValue(size, value);

  const inputRef = React.useRef<RNTextInput[]>([]);

  function onChangeOtp(text: string, index: number) {
    const _values = values;
    _values[index] = text;
    onChangeValue(_values.join(''));
  }

  function onKeyPress(e: any, index: number) {
    const key = e.nativeEvent.key;
    if (key === 'Backspace' && index > 0) {
      inputRef.current[index - 1].focus();
    } else if (key !== 'Backspace' && index < size - 1) {
      inputRef.current[index + 1].focus();
    }
  }
  return (
    <VerticalBox {...rest}>
      <HorizontalBox justifyContent="space-around" paddingHorizontal="m">
        {values.map((itemValue, index) => {
          return (
            <TextInput
              ref={el => (inputRef.current[index] = el)}
              key={index}
              variant="outlined"
              flex={0}
              width={50}
              textAlign="center"
              numberOfLines={1}
              maxLength={1}
              value={itemValue}
              onChangeText={(text: string) => onChangeOtp(text, index)}
              onKeyPress={(e: any) => onKeyPress(e, index)}
              isError={!!error}
            />
          );
        })}
      </HorizontalBox>
      {!!error && (
        <Text variant="body2" color="error" marginTop="xs" alignSelf="center">
          {error}
        </Text>
      )}
    </VerticalBox>
  );
};

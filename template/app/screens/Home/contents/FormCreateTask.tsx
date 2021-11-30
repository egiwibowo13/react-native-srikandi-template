/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Button, HorizontalBox, VerticalBox, Icon} from '@components/index';
import {IcArrowUpSquareFill, IcCalendarDay, IcAlarm} from '@assets/svgs';
import {typography} from '@styles/index';

type FormCreateTaskProps = {
  onSave: (value: string) => void;
};

export const FormCreateTask = (props: FormCreateTaskProps) => {
  const [value, setValue] = useState<string>('');
  return (
    <VerticalBox
      borderTopWidth={0.5}
      borderTopColor="primary"
      width="100%"
      paddingVertical="s">
      <HorizontalBox alignItems="center">
        <TextInput
          value={value}
          onChangeText={setValue}
          autoFocus
          style={styles.txtInput}
        />

        <Icon
          marginLeft="m"
          onPress={() => {
            props.onSave(value);
            setValue('');
          }}
          Icon={IcArrowUpSquareFill}
          size={18}
          color="primary"
        />
      </HorizontalBox>
      <HorizontalBox marginTop="s">
        <Button
          variant="nude"
          label="Set due date"
          labelStyle={styles.textNudeBtn}
          icon={IcCalendarDay}
          onPress={() => {}}
        />
        <Button
          variant="nude"
          label="Remind me"
          marginLeft="s"
          labelStyle={styles.textNudeBtn}
          icon={IcAlarm}
          onPress={() => {}}
        />
      </HorizontalBox>
    </VerticalBox>
  );
};

const styles = StyleSheet.create({
  txtInput: {
    height: 24,
    flex: 1,
    padding: 0,
  },
  textNudeBtn: {
    ...typography.caption,
  },
});

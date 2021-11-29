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
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {Button} from '@components/index';
import {Icon} from '@components/TabIcon';
import {IcArrowUpSquareFill, IcCalendarDay, IcAlarm} from '@assets/svgs';
import {colorBackground, colorBase, colorText, typography} from '@styles/index';

type FormCreateTaskProps = {
  onSave: (value: string) => void;
};

export const FormCreateTask = (props: FormCreateTaskProps) => {
  const [value, setValue] = useState<string>('');
  return (
    <View style={styles.container}>
      <View style={styles.rowCenter}>
        <TextInput
          value={value}
          onChangeText={setValue}
          autoFocus
          style={styles.txtInput}
        />
        <TouchableOpacity
          style={styles.containerSendIcon}
          onPress={() => {
            props.onSave(value);
            setValue('');
          }}>
          <Icon
            Icon={IcArrowUpSquareFill}
            size={20}
            color={colorBase.primary}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerFooterIcons}>
        <Button
          variant="nude"
          label="Set due date"
          // titleStyle={styles.textNudeBtn}
          icon={IcCalendarDay}
          onPress={() => {}}
        />
        <Button
          variant="nude"
          label="Remind me"
          // color={colorText.midnight}
          containerStyle={{marginLeft: 8}}
          // titleStyle={styles.textNudeBtn}
          icon={IcAlarm}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0.5,
    borderTopColor: colorBackground.grey,
    width: '100%',
    paddingVertical: 8,
    bottom: 0,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtInput: {
    height: 24,
    flex: 1,
    padding: 0,
  },
  containerFooterIcons: {
    flexDirection: 'row',
    marginTop: 8,
  },
  containerSendIcon: {
    marginLeft: 16,
  },
  textNudeBtn: {
    ...typography.caption,
  },
});

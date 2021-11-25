import React from 'react';
import {Text, StyleSheet, TextInput} from 'react-native';
import {typography} from '@styles/index';

type TitleCategoryProps = {
  title: string;
  onSubmit: (title: string) => void;
};

export const TitleCategory = (props: TitleCategoryProps) => {
  const [titleEdited, setTitleEdited] = React.useState<string>(props.title);
  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  if (isEdit) {
    return (
      <TextInput
        value={titleEdited}
        autoFocus
        onChangeText={setTitleEdited}
        onSubmitEditing={() => props.onSubmit(titleEdited)}
        style={styles.textInput}
      />
    );
  }
  return (
    <Text style={styles.title} onPress={() => setIsEdit(true)}>
      {titleEdited}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    ...typography.subtitle,
  },
  textInput: {
    ...typography.subtitle,
  },
});

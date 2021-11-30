import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Text, BaseButton, VerticalBox} from '@components/index';
import {UserView} from '../Users.model';

type CardUserProps = {
  onPress: () => void;
  user: UserView;
};

export const CardUser = (props: CardUserProps) => {
  return (
    <BaseButton flexDirection="row" paddingVertical="s" onPress={props.onPress}>
      <Image style={styles.image} source={{uri: props.user.avatar}} />
      <VerticalBox marginLeft="s">
        <Text variant="body2">{props.user.fullname}</Text>
        <Text variant="body2">{props.user.email}</Text>
      </VerticalBox>
    </BaseButton>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 60,
  },
});

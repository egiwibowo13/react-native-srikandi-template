import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image, View} from 'react-native';
import {UserView} from '../Users.model';
import {typography} from '../../../styles';

type CardUserProps = {
  onPress: () => void;
  user: UserView;
};

export const CardUser = (props: CardUserProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image style={styles.image} source={{uri: props.user.avatar}} />
      <View>
        <Text style={styles.text}>{props.user.fullname}</Text>
        <Text style={styles.text}>{props.user.email}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  image: {
    width: 40,
    height: 60,
  },
  text: {
    ...typography.body2,
    marginLeft: 8,
  },
});

import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: WIDTH,
    shadowOpacity: 0.2,
    shadowRadius: 0.7,
    zIndex: 10,
  },
});

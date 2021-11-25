import React, {useState, useEffect} from 'react';
import {Animated, TouchableOpacity, Text, View, TextStyle} from 'react-native';
import {noop} from '@utils/index';
import NotifyServices, {NotifyParams} from '@services/Notify';
import {colorBackground} from '@styles/index';
import styles from './MessageInfo.styles';

const DEFAULT_MESSAGE = 'Please try again.';
const DEFAULT_TEXT_STATUS = 'Error';
const DEFAULT_CB_TEXT_STATUS = 'Retry';
const DEFAULT_HEIGHT = 60;

const defaultProps = {
  textStatusStyle: {},
  textCbStyle: {},
};

interface MessageInfoProps {
  textStatusStyle?: TextStyle;
  textCbStyle?: TextStyle;
}

const MessageInfo: React.FC<MessageInfoProps> = props => {
  const [animationState] = useState({
    height: new Animated.Value(0),
  });
  const [visible, setVisible] = useState<boolean>(false);
  const [textStatus, setTextStatus] = useState<string>('');
  const [textCb, setTextCb] = useState<string>('');
  const [textMessage, setTextMessage] = useState<string>('');
  const [bgColor, setBgColor] = useState<string>(colorBackground.blackout);
  const [onPress, setOnpress] = useState<() => void>(noop);

  const {textStatusStyle, textCbStyle} = props;

  const setContent = (content: NotifyParams) => {
    const {
      visible: nVisible = false,
      textStatus: nTextStatus = DEFAULT_TEXT_STATUS,
      textCb: nTextCb = DEFAULT_CB_TEXT_STATUS,
      textMessage: nTextMessage = DEFAULT_MESSAGE,
      onPress: nOnPress = NotifyServices.clearNotify,
      bgColor: nBgColor = colorBackground.blackout,
    } = content;
    setVisible(nVisible);
    setTextStatus(nTextStatus);
    setTextCb(nTextCb);
    setTextMessage(nTextMessage);
    setBgColor(nBgColor);
    setOnpress(() => nOnPress);
  };

  useEffect(() => {
    Animated.timing(animationState.height, {
      toValue: visible ? DEFAULT_HEIGHT : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  });

  useEffect(() => {
    const subscription = NotifyServices.getNotify().subscribe(
      (content: NotifyParams) => {
        setContent(content);
      },
    );
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <Animated.View
      style={[
        {height: animationState.height},
        styles.container,
        {backgroundColor: bgColor},
      ]}>
      <View style={styles.textStatusContainer}>
        <Text style={[styles.textStatusStyle, textStatusStyle]}>
          {textStatus}
        </Text>
      </View>
      <View style={styles.textMessageContainer}>
        <Text style={styles.textMessage}>{textMessage}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.cbText, textCbStyle]}>{textCb}</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

MessageInfo.defaultProps = defaultProps;

export default MessageInfo;

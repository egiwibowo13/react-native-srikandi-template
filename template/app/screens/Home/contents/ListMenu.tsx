import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Icon} from '@components/TabIcon';
import {typography, colorText, colorBackground} from '@styles/index';
import {IcList} from '@assets/svgs';

type MenuItemProps = {
  title: string;
  leftIcon: React.ReactNode;
  count: number;
};

export const MenuItem = ({
  item,
  onPress,
}: {
  item: MenuItemProps;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.containerItem} onPress={onPress}>
      {item.leftIcon !== null && (
        <View style={styles.containerIcon}>{item.leftIcon}</View>
      )}
      <Text style={styles.title}>{item.title}</Text>
      {item.count > 0 && <Text style={styles.count}>{`${item.count}`}</Text>}
    </TouchableOpacity>
  );
};

export const ListMenu = ({
  data,
  onPress,
}: {
  data: MenuItemProps[];
  onPress: () => void;
}) => {
  return (
    <>
      {data.map((item, index) => {
        return <MenuItem key={index} item={item} onPress={onPress} />;
      })}
    </>
  );
};

type Category = {
  id: string;
  title: string;
  count: number;
};

export const ListCategory = ({
  data,
  onPress,
}: {
  data: Category[];
  onPress: (category: Category) => void;
}) => {
  return (
    <>
      {data.map((category, index) => {
        return (
          <MenuItem
            key={index}
            item={{
              title: category.title,
              leftIcon: (
                <Icon Icon={IcList} size={18} color={colorBackground.grey} />
              ),
              count: category.count,
            }}
            onPress={() => onPress(category)}
          />
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  containerIcon: {
    marginRight: 8,
  },
  textComplete: {
    ...typography.body2,
    textDecorationLine: 'line-through',
  },
  title: {
    ...typography.subtitle,
    flex: 1,
  },
  count: {
    ...typography.subtitle,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    color: colorText.inactive,
  },
});

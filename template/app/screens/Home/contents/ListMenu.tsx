import React from 'react';
import {Text, VerticalBox, BaseButton, Icon} from '@components/index';
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
    <BaseButton
      flexDirection="row"
      alignItems="center"
      paddingVertical="s"
      onPress={onPress}>
      {item.leftIcon !== null && (
        <VerticalBox marginRight="s">{item.leftIcon}</VerticalBox>
      )}
      <Text variant="subtitle" flex={1}>
        {item.title}
      </Text>
      {item.count > 0 && (
        <Text variant="subtitle" color="greyPrimary">{`${item.count}`}</Text>
      )}
    </BaseButton>
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
              leftIcon: <Icon Icon={IcList} size={18} color={'greyPrimary'} />,
              count: category.count,
            }}
            onPress={() => onPress(category)}
          />
        );
      })}
    </>
  );
};

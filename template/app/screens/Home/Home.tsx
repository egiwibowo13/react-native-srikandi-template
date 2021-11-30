/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {BaseScreen, Button, ScrollableView, Line} from '@components/index';
import {Icon} from '@components/TabIcon';
import {IcSun, IcStar, IcTask, IcCalendar, IcPlus} from '@assets/svgs';
import {ListMenu, ListCategory} from './contents/ListMenu';
import {FormCreateTask} from './contents/FormCreateTask';
import {Menu} from './Home.model';
import {useHome} from './useHome';
import styles from './Home.styles';

Home.dependencies = {
  useActions: useHome,
};

function Home() {
  const {useActions} = Home.dependencies;
  const isDarkMode = useColorScheme() === 'dark';
  const {state, actions, data} = useActions();
  const {showFormCreateList} = state;
  const {setShowCreateList, onAddCategory, onPressCategoryItem} = actions;
  const {categories} = data;

  return (
    <BaseScreen style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollableView contentInsetAdjustmentBehavior="automatic">
        <ListMenu
          data={[
            {
              title: Menu.MY_DAY,
              leftIcon: <Icon Icon={IcSun} size={18} color={'greyPrimary'} />,
              count: 0,
            },
            {
              title: Menu.IMPORTANT,
              leftIcon: <Icon Icon={IcStar} size={18} color={'greyPrimary'} />,
              count: 0,
            },
            {
              title: Menu.PLANNED,
              leftIcon: (
                <Icon Icon={IcCalendar} size={18} color={'greyPrimary'} />
              ),
              count: 0,
            },
            {
              title: Menu.TASKS,
              leftIcon: <Icon Icon={IcTask} size={18} color={'greyPrimary'} />,
              count: 0,
            },
          ]}
          onPress={() => {}}
        />
        <Line marginVertical="m" />
        <Button
          variant="nude"
          icon={IcPlus}
          label="Add List"
          onPress={() => {
            setShowCreateList(true);
          }}
          containerStyle={styles.containerBtn}
        />
        <ListCategory
          data={categories.map(category => {
            return {
              id: category.id,
              title: category.title,
              count: category.tasks.length,
            };
          })}
          onPress={category => onPressCategoryItem({id: category.id})}
        />
      </ScrollableView>
      {showFormCreateList && <FormCreateTask onSave={onAddCategory} />}
    </BaseScreen>
  );
}

export default Home;

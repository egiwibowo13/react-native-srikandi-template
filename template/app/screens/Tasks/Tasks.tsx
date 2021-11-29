import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {BaseScreen, Button} from '@components/index';
import {Icon} from '@components/TabIcon';
import {IcPlus, IcDeleteFill} from '@assets/svgs';
import {colorBase, colorBackground} from '@styles/index';
import {ListTask} from './contents/ListTask';
import {FormCreateTask} from '../Home/contents/FormCreateTask';
import {TitleCategory} from './contents/TitleCategory';
import styles from './Tasks.styles';
import {useTasks} from './useTasks';

export const Tasks = () => {
  const {data, state, actions, navigation} = useTasks();
  const {showFormCreateList} = state;
  const {category} = data;
  const {
    setShowCreateList,
    saveTask,
    onPressDeleteTask,
    onPressEditTask,
    onPressDeleteCategory,
    updateTitleCategory,
  } = actions;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity
            style={styles.containerBtnDelete}
            onPress={onPressDeleteCategory}>
            <Icon Icon={IcDeleteFill} size={18} color={colorBackground.error} />
          </TouchableOpacity>
        );
      },
    });
  }, [navigation]);

  return (
    <BaseScreen style={styles.container}>
      <TitleCategory
        title={category?.title ?? ''}
        onSubmit={title => updateTitleCategory(title)}
      />
      <Button
        variant="nude"
        icon={IcPlus}
        label="Add Task"
        onPress={() => {
          setShowCreateList(true);
        }}
        containerStyle={styles.containerBtnAddTask}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.content}>
        <ListTask
          tasks={category?.tasks ?? []}
          onDelete={onPressDeleteTask}
          onEdit={onPressEditTask}
        />
      </ScrollView>
      {showFormCreateList && <FormCreateTask onSave={saveTask} />}
    </BaseScreen>
  );
};

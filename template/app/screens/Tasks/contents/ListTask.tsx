import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Icon, HorizontalBox, BaseButton, Text} from '@components/index';
import {IcPencilFill, IcCheckLine, IcCloseLine} from '@assets/svgs';
import {Task} from 'app/redux/categories';
import {typography} from '@styles/index';

export const CardTask = ({
  task,
  onDelete,
  onEdit,
}: {
  task: Task;
  onDelete: () => void;
  onEdit: (task: Task) => void;
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>(task.title);
  if (isEdit) {
    return (
      <HorizontalBox flex={1} height={30} justifyContent="space-around">
        <TextInput
          value={editValue}
          autoFocus
          onChangeText={setEditValue}
          style={styles.textInput}
        />
        <Icon
          color={'greyPrimary'}
          size={16}
          Icon={IcPencilFill}
          onPress={() => {
            setIsEdit(prev => !prev);
            onEdit({...task, title: editValue});
          }}
        />
      </HorizontalBox>
    );
  }
  return (
    <HorizontalBox
      flex={1}
      height={30}
      alignItems="center"
      justifyContent="space-between">
      <BaseButton onPress={() => setIsEdit(prev => !prev)}>
        <Text
          variant="caption"
          minWidth={100}
          textDecorationLine={task.completed ? 'line-through' : 'none'}>
          {task.title}
        </Text>
      </BaseButton>
      <HorizontalBox>
        <Icon
          color={task.completed ? 'success' : 'greyPrimary'}
          size={18}
          Icon={IcCheckLine}
          onPress={() => {
            onEdit({...task, completed: !task.completed});
          }}
        />
        <Icon color={'error'} size={18} Icon={IcCloseLine} onPress={onDelete} />
      </HorizontalBox>
    </HorizontalBox>
  );
};

export const ListTask = ({
  tasks,
  onDelete,
  onEdit,
}: {
  tasks: Task[];
  onDelete: (task: Task) => void;
  onEdit: (task: Task) => void;
}) => {
  return (
    <>
      {tasks.map((task, index) => {
        return (
          <CardTask
            key={index}
            task={task}
            onDelete={() => onDelete(task)}
            onEdit={onEdit}
          />
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    ...typography.caption,
    flex: 1,
    marginTop: -8,
    alignSelf: 'center',
  },
});

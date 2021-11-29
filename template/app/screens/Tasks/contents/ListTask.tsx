import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Icon as TabIcon} from '@components/TabIcon';
import {IcPencilFill, IcCheckLine, IcCloseLine} from '@assets/svgs';
import {Task} from 'app/redux/categories';
import {colorBackground, typography} from '@styles/index';

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
      <View style={styles.containerEdit}>
        <TextInput
          value={editValue}
          autoFocus
          onChangeText={setEditValue}
          style={styles.textInput}
        />
        <TouchableOpacity
          onPress={() => {
            setIsEdit(prev => !prev);
            onEdit({...task, title: editValue});
          }}>
          <TabIcon
            color={colorBackground.blackout}
            size={16}
            Icon={IcPencilFill}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerTitle}
        onPress={() => setIsEdit(prev => !prev)}>
        <Text style={task.completed ? styles.textComplete : styles.text}>
          {task.title}
        </Text>
      </TouchableOpacity>
      <View style={styles.containerActions}>
        <TouchableOpacity
          onPress={() => {
            onEdit({...task, completed: !task.completed});
          }}>
          <TabIcon
            color={
              task.completed ? colorBackground.success : colorBackground.grey
            }
            size={18}
            Icon={IcCheckLine}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <TabIcon color={colorBackground.error} size={18} Icon={IcCloseLine} />
        </TouchableOpacity>
      </View>
    </View>
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
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30,
  },
  containerEdit: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 30,
  },
  containerTitle: {
    alignItems: 'center',
  },
  textComplete: {
    ...typography.caption,
    textDecorationLine: 'line-through',
    flex: 1,
    lineHeight: 30,
    alignSelf: 'center',
    alignItems: 'center',
    minWidth: 100,
  },
  text: {
    ...typography.caption,
    flex: 1,
    lineHeight: 30,
    alignSelf: 'center',
    alignItems: 'center',
    minWidth: 100,
  },
  containerActions: {
    flexDirection: 'row',
  },
  textInput: {
    ...typography.caption,
    flex: 1,
    marginTop: -8,
    alignSelf: 'center',
  },
});

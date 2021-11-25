import {useState} from 'react';
import cuid from 'cuid';
import {useDispatch, useSelector} from 'react-redux';
import {Task} from '@appredux/categories';
import {selectCategory} from '@appredux/categories/Categories.selector';
import {RootState} from '@appredux/store';
import {TasksNavigator} from './Tasks.navigator';
import {TasksUseCase} from '@domain/TasksUseCase';

useTasks.dependencies = {
  navigator: TasksNavigator,
  tasksUseCase: TasksUseCase,
};

export function useTasks() {
  const {navigator, tasksUseCase} = useTasks.dependencies;

  const dispatch = useDispatch();
  const nav = navigator();
  const {params} = nav;

  const category = useSelector((state: RootState) =>
    selectCategory(state, params?.categoryId ?? ''),
  );

  const [showFormCreateList, setShowCreateList] = useState<boolean>(false);

  function saveTask(title: string) {
    setShowCreateList(false);
    tasksUseCase.addTask({
      categoryId: params.categoryId ?? '',
      task: {
        id: cuid(),
        title,
        completed: false,
      },
    })(dispatch);
  }

  function onPressDeleteTask(task: Task) {
    tasksUseCase.deleteTask({
      categoryId: params.categoryId ?? '',
      taskId: task.id,
    })(dispatch);
  }

  function onPressEditTask(task: Task) {
    tasksUseCase.updateTask({
      categoryId: params.categoryId ?? '',
      taskId: task.id,
      task,
    })(dispatch);
  }

  function onPressDeleteCategory() {
    tasksUseCase.deleteCategoryTask({id: params.categoryId ?? ''})(dispatch);
    nav.goBack();
  }

  function updateTitleCategory(title: string) {
    tasksUseCase.updateCategoryTask({
      id: params.categoryId ?? '',
      category: {
        id: params.categoryId ?? '',
        title,
        tasks: category?.tasks ?? [],
      },
    })(dispatch);
  }

  return {
    state: {
      showFormCreateList,
    },
    actions: {
      setShowCreateList,
      saveTask,
      onPressDeleteTask,
      onPressEditTask,
      onPressDeleteCategory,
      updateTitleCategory,
    },
    data: {
      category,
    },
    navigation: nav.navigation,
  };
}

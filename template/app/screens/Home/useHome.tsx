import cuid from 'cuid';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectCategories} from '@appredux/categories/Categories.selector';
import {HomeNavigator} from './Home.navigator';
import {TasksUseCase} from '@domain/TasksUseCase';

useHome.dependencies = {
  navigator: HomeNavigator,
  tasksUseCase: TasksUseCase,
};

export function useHome() {
  const {navigator, tasksUseCase} = useHome.dependencies;
  const nav = navigator();

  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [showFormCreateList, setShowCreateList] = useState<boolean>(false);

  function onAddCategory(title: string) {
    setShowCreateList(false);
    tasksUseCase.addCategoryTask({
      id: cuid(),
      title: title,
      tasks: [],
    })(dispatch);
  }

  function onPressCategoryItem({id}: {id: string}) {
    nav.goToTasks(id);
  }

  return {
    data: {
      categories,
    },
    state: {
      showFormCreateList,
    },
    actions: {
      setShowCreateList,
      onAddCategory,
      onPressCategoryItem,
    },
  };
}

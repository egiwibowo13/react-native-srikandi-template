import {
  addCategory,
  updateCategory,
  deleteCategory,
  addTask as addTaskRedux,
  updateTask as updateTaskRedux,
  deleteTask as deleteTaskRedux,
  Category,
  Task,
} from '@appredux/categories';
import analytics from '@services/Analytics';

export const TasksUseCase = {
  addCategoryTask,
  updateCategoryTask,
  deleteCategoryTask,
  addTask,
  updateTask,
  deleteTask,
};

function addCategoryTask(payload: Category) {
  return (dispatch: any) => {
    dispatch(addCategory(payload));
    analytics.logEvent('add-category', {});
  };
}

function deleteCategoryTask(payload: {id: string}) {
  return (dispatch: any) => {
    dispatch(deleteCategory(payload));
    analytics.logEvent('delete-category', {});
  };
}

function updateCategoryTask(payload: {id: string; category: Category}) {
  return (dispatch: any) => {
    dispatch(updateCategory(payload));
    analytics.logEvent('update-category', {});
  };
}

function addTask(payload: {categoryId: string; task: Task}) {
  return (dispatch: any) => {
    dispatch(addTaskRedux(payload));
    analytics.logEvent('add-task', {});
  };
}

function updateTask(payload: {categoryId: string; taskId: string; task: Task}) {
  return (dispatch: any) => {
    dispatch(updateTaskRedux(payload));
    analytics.logEvent('update-task', {});
  };
}

function deleteTask(payload: {categoryId: string; taskId: string}) {
  return (dispatch: any) => {
    dispatch(deleteTaskRedux(payload));
    analytics.logEvent('delete-task', {});
  };
}

import {PayloadAction, CaseReducer} from '@reduxjs/toolkit';
import {CategoriesState, Category, Task} from './Categories.model';

const addOneCategory: CaseReducer<CategoriesState, PayloadAction<Category>> = (
  state,
  action,
) => {
  state.data.categories.push(action.payload);
};

const addManyCategory: CaseReducer<
  CategoriesState,
  PayloadAction<Category[]>
> = (state, action) => {
  state.data.categories.concat(action.payload);
};

const updateOneCategory: CaseReducer<
  CategoriesState,
  PayloadAction<{id: string; category: Category}>
> = (state, action) => {
  const indexCategory = state.data.categories.findIndex(
    category => category.id === action.payload.id,
  );
  if (indexCategory > -1) {
    state.data.categories[indexCategory] = {
      ...state.data.categories[indexCategory],
      title: action.payload.category.title,
    };
  }
};

const deleteOneCategory: CaseReducer<
  CategoriesState,
  PayloadAction<{id: string}>
> = (state, action) => {
  const indexCategory = state.data.categories.findIndex(
    category => category.id === action.payload.id,
  );
  if (indexCategory > -1) {
    state.data.categories.splice(indexCategory, 1);
  }
};

const addOneTask: CaseReducer<
  CategoriesState,
  PayloadAction<{categoryId: string; task: Task}>
> = (state, {payload}) => {
  const indexCategory = state.data.categories.findIndex(
    category => category.id === payload.categoryId,
  );
  if (indexCategory > -1) {
    state.data.categories[indexCategory].tasks.push(payload.task);
  }
};

const updateOneTask: CaseReducer<
  CategoriesState,
  PayloadAction<{categoryId: string; taskId: string; task: Task}>
> = (state, {payload}) => {
  const indexCategory = state.data.categories.findIndex(
    category => category.id === payload.categoryId,
  );
  if (indexCategory > -1) {
    const tasks = state.data.categories[indexCategory].tasks;
    const indexTask = tasks.findIndex(task => task.id === payload.taskId);
    if (indexTask > -1) {
      tasks[indexTask] = payload.task;
      state.data.categories[indexCategory].tasks = tasks;
    }
  }
};

const deleteOneTask: CaseReducer<
  CategoriesState,
  PayloadAction<{categoryId: string; taskId: string}>
> = (state, {payload}) => {
  const indexCategory = state.data.categories.findIndex(
    category => category.id === payload.categoryId,
  );
  if (indexCategory > -1) {
    const tasks = state.data.categories[indexCategory].tasks;
    const indexTask = tasks.findIndex(task => task.id === payload.taskId);
    if (indexTask > -1) {
      state.data.categories[indexCategory].tasks.splice(indexTask, 1);
    }
  }
};

export const CategoriesActions = {
  addOneCategory,
  addManyCategory,
  updateOneCategory,
  deleteOneCategory,
  addOneTask,
  updateOneTask,
  deleteOneTask,
};

export default CategoriesActions;

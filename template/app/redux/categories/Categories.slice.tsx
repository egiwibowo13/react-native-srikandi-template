import {createSlice} from '@reduxjs/toolkit';
import {CategoriesState} from './Categories.model';
import {CategoriesActions} from './Categories.actions';

const initialState: CategoriesState = {
  data: {
    categories: [],
  },
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: CategoriesActions.addOneCategory,
    updateCategory: CategoriesActions.updateOneCategory,
    deleteCategory: CategoriesActions.deleteOneCategory,
    addTask: CategoriesActions.addOneTask,
    updateTask: CategoriesActions.updateOneTask,
    deleteTask: CategoriesActions.deleteOneTask,
  },
});

export const categoriesReducer = categoriesSlice.reducer;

export const {
  addCategory,
  updateCategory,
  deleteCategory,
  addTask,
  updateTask,
  deleteTask,
} = categoriesSlice.actions;

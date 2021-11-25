import {combineReducers} from 'redux';
import {categoriesReducer} from './categories';

export const rootReducer = combineReducers({
  categories: categoriesReducer,
});

export default rootReducer;

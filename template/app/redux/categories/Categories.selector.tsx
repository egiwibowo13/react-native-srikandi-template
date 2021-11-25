import {RootState} from '../store';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {Category} from './Categories.model';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const selectCategories = (state: RootState) =>
  state.categories.data.categories;

export function selectCategory(
  state: RootState,
  categoryId: string,
): Category | undefined {
  const category = state.categories.data.categories.find(
    _category => _category.id === categoryId,
  );
  return category;
}

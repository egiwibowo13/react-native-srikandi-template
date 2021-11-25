import {renderHook, act} from '@testing-library/react-hooks';
import {useActionMock} from '@utils/tests/useActionMock';
import {useHome} from '../useHome';

jest.mock('cuid', () => jest.fn(() => 'my_id'));

describe('useHome', () => {
  const navigatorMock = {
    goToTasks: jest.fn(),
  };

  const tasksUseCaseMock = {
    addCategoryTask: jest.fn(() => jest.fn()),
  };

  useHome.dependencies = {
    navigator: useActionMock(navigatorMock),
    tasksUseCase: tasksUseCaseMock,
  };

  test('should show create category form', () => {
    const {result} = renderHook(() => useHome());
    expect(result.current.state.showFormCreateList).toBeFalsy();

    act(() => {
      result.current.actions.setShowCreateList(true);
    });
    expect(result.current.state.showFormCreateList).toBeTruthy();
  });

  test('should add category', () => {
    const {result} = renderHook(() => useHome());
    act(() => {
      result.current.actions.setShowCreateList(true);
    });
    expect(result.current.state.showFormCreateList).toBeTruthy();

    act(() => {
      result.current.actions.onAddCategory('my title');
    });
    expect(result.current.state.showFormCreateList).toBeFalsy();
    expect(tasksUseCaseMock.addCategoryTask).toHaveBeenCalledWith({
      id: 'my_id',
      title: 'my title',
      tasks: [],
    });
  });

  test('should navigate to task when press category item', () => {
    const {result} = renderHook(() => useHome());
    act(() => {
      result.current.actions.onPressCategoryItem({id: 'categoryId'});
    });
    expect(navigatorMock.goToTasks).toHaveBeenCalledWith('categoryId');
  });
});

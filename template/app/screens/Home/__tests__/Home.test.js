import React from 'react';
import {render} from '@testing-library/react-native';
import {useActionMock} from '@utils/tests/useActionMock';
import Home from '../Home';

jest.mock('@components/index', () => ({
  BaseScreen: 'BaseScreen',
  Button: 'Button',
}));
jest.mock('@components/TabIcon', () => 'Icon');
jest.mock('@assets/svgs', () => ({
  IcSun: 'IcSun',
  IcStar: 'IcStar',
  IcTask: 'IcTask',
  IcCalendar: 'IcCalendar',
  IcPlus: 'IcPlus',
}));

describe('Home', () => {
  const useHomeMock = {
    data: {
      categories: [],
    },
    state: {
      showFormCreateList: false,
    },
    actions: {
      setShowCreateList: jest.fn(),
      onAddCategory: jest.fn(),
      onPressCategoryItem: jest.fn(),
    },
  };

  Home.dependencies = {
    useActions: useActionMock(useHomeMock),
  };

  test('should render correctly', () => {
    const {toJSON} = render(<Home />);
    expect(toJSON()).toMatchSnapshot();
  });
});

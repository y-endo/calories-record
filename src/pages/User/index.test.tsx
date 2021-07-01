import * as React from 'react';
import * as reactRedux from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '~/shared/theme';
import UserPage from './index';

describe('<UserPage />', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockReturnValue(jest.fn());
  });

  test('userDataがnullなら未登録画面を表示', () => {
    useSelectorMock.mockReturnValue(null);

    const { debug, getByText } = render(
      <ThemeProvider theme={theme}>
        <Router>
          <UserPage />
        </Router>
      </ThemeProvider>
    );

    expect(getByText('ユーザー情報が登録されていません')).toBeInTheDocument();

    // debug();
  });

  test('userDataがnullでなければユーザー情報画面を表示', () => {
    useSelectorMock.mockReturnValue({});

    const { debug, getByText } = render(
      <ThemeProvider theme={theme}>
        <Router>
          <UserPage />
        </Router>
      </ThemeProvider>
    );

    expect(getByText('ユーザー情報を更新する')).toBeInTheDocument();

    // debug();
  });
});

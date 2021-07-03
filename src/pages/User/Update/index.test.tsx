import * as React from 'react';
import * as reactRedux from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '~/shared/theme';
import UserPage from '~/pages/User';
import UserUpdatePage from './index';

describe('<UserUpdatePage />', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockReturnValue(jest.fn());
  });

  test('userDataがnullなら/userへリダイレクト', () => {
    useSelectorMock.mockReturnValue(null);

    const { debug, getByText } = render(
      <ThemeProvider theme={theme}>
        <Router>
          <Route exact path="/user" component={UserPage} />
          <UserUpdatePage />
        </Router>
      </ThemeProvider>
    );

    expect(getByText('ユーザー情報が登録されていません')).toBeInTheDocument();
  });
});

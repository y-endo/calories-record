import * as React from 'react';
import * as reactRedux from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMemoryHistory, createLocation } from 'history';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '~/shared/theme';
import UserPage from '~/pages/User';
import UserRegisterPage from './index';

describe('<UserRegisterPage />', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  const history = createMemoryHistory();
  const path = '/user/register';
  const match = {
    isExact: true,
    path,
    url: path,
    params: {}
  };
  const location = createLocation(match.url);

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  test('useDataがnullでなければ/userへリダイレクト', () => {
    useSelectorMock.mockReturnValue({});
    useDispatchMock.mockReturnValue(jest.fn());

    const { debug, getByText } = render(
      <ThemeProvider theme={theme}>
        <Router>
          <Route exact path="/user" component={UserPage} />
          <UserRegisterPage history={history} location={location} match={match} />
        </Router>
      </ThemeProvider>
    );

    expect(getByText('ユーザー情報を更新する')).toBeInTheDocument();

    // debug();
  });
});

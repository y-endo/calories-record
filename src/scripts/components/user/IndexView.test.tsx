import * as React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import IndexView from './IndexView';
import theme from '~/scripts/theme';

import IUser from '~/scripts/interfaces/IUser';

describe('<IndexView />', () => {
  test('userData が null', () => {
    const { debug, getByText } = render(
      <ThemeProvider theme={theme}>
        <Router>
          <IndexView
            userData={null}
            deleteUser={() => {
              return null;
            }}
          />
        </Router>
      </ThemeProvider>
    );

    expect(getByText('ユーザー情報が登録されていません')).toBeInTheDocument();

    // debug();
  });

  test('userData が 28歳 男性 活動レベル低い', () => {
    const userData: IUser = {
      age: 28,
      sex: 'male',
      height: 0,
      weight: 0,
      activeLevel: 1.5,
      bmr: 0,
      requiredEnergy: 0
    };

    const { debug, getByText } = render(
      <ThemeProvider theme={theme}>
        <Router>
          <IndexView
            userData={userData}
            deleteUser={() => {
              return null;
            }}
          />
        </Router>
      </ThemeProvider>
    );

    expect(getByText('年齢: 28')).toBeInTheDocument();
    expect(getByText('性別: 男性')).toBeInTheDocument();
    expect(getByText('身体活動レベル: 1.5（低い）')).toBeInTheDocument();

    // debug();
  });

  test('userData が 40歳 女性 活動レベル高い', () => {
    const userData: IUser = {
      age: 40,
      sex: 'female',
      height: 0,
      weight: 0,
      activeLevel: 2.0,
      bmr: 0,
      requiredEnergy: 0
    };

    const { debug, getByText } = render(
      <ThemeProvider theme={theme}>
        <Router>
          <IndexView
            userData={userData}
            deleteUser={() => {
              return null;
            }}
          />
        </Router>
      </ThemeProvider>
    );

    expect(getByText('年齢: 40')).toBeInTheDocument();
    expect(getByText('性別: 女性')).toBeInTheDocument();
    expect(getByText('身体活動レベル: 2（高い）')).toBeInTheDocument();

    // debug();
  });
});

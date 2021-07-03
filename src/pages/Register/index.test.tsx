import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent } from '@testing-library/react';

import theme from '~/shared/theme';
import RegisterPage from './index';

describe('<RegisterPage />', () => {
  test('「登録する」ボタンの状態変化', () => {
    const { debug, getByText, getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <Router>
          <RegisterPage />
        </Router>
      </ThemeProvider>
    );
    const button = getByText('登録する');
    const inputDate = getByLabelText('日付');
    const selectTime = getByLabelText('時間');
    const inputCalorie = getByLabelText('カロリー（kcal）');

    expect(button).toBeDisabled();

    fireEvent.change(inputDate, { target: { value: '2000-10-10' } });
    fireEvent.change(selectTime, { target: { value: 'lunch' } });
    fireEvent.change(inputCalorie, { target: { value: '100' } });

    expect(button).not.toBeDisabled();

    fireEvent.change(inputDate, { target: { value: '' } });
    expect(button).toBeDisabled();
    fireEvent.change(inputDate, { target: { value: '2000-10-10' } });
    fireEvent.change(selectTime, { target: { value: '' } });
    expect(button).toBeDisabled();
    fireEvent.change(selectTime, { target: { value: 'lunch' } });
    fireEvent.change(inputCalorie, { target: { value: '' } });
    expect(button).toBeDisabled();
    fireEvent.change(inputCalorie, { target: { value: '100' } });

    expect(button).not.toBeDisabled();

    // debug();
  });
});

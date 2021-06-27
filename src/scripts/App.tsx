import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import theme from '~/scripts/theme';

import AppContainer from '~/scripts/components/app/AppContainer';
import ResetStyle from '~/scripts/components/style/ResetStyle';
import GlobalStyle from '~/scripts/components/style/GlobalStyle';

import TopPage from '~/scripts/pages/top/Index';
import UserPage from '~/scripts/pages/user/Index';
import UserRegisterPage from '~/scripts/pages/user/Register';
import RegisterPage from '~/scripts/pages/register/Index';
import HistoryPage from '~/scripts/pages/history/Index';

import store from './stores';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppContainer>
            <ResetStyle />
            <GlobalStyle />
            <Router>
              <Switch>
                <Route exact path="/" component={TopPage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/history" component={HistoryPage} />
                <Route exact path="/user" component={UserPage} />
                <Route exact path="/user/register" component={UserRegisterPage} />
              </Switch>
            </Router>
          </AppContainer>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
};

export default App;

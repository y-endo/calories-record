import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import theme from '~/shared/theme';

import AppContainer from '~/shared/components/AppContainer';
import ResetStyle from '~/shared/styles/reset';
import BaseStyle from '~/shared/styles/base';

import TopPage from '~/pages/Top';
import UserPage from '~/pages/User';
import UserRegisterPage from '~/pages/User/Register';
import UserUpdatePage from '~/pages/User/Update';
import RegisterPage from '~/pages/Register';
import HistoryPage from '~/pages/History';

import store from './shared/stores';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppContainer>
            <ResetStyle />
            <BaseStyle />
            <Router>
              <Switch>
                <Route exact path="/" component={TopPage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/history" component={HistoryPage} />
                <Route exact path="/user" component={UserPage} />
                <Route exact path="/user/register" component={UserRegisterPage} />
                <Route exact path="/user/update" component={UserUpdatePage} />
              </Switch>
            </Router>
          </AppContainer>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
};

export default App;

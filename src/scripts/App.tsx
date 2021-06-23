import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ResetStyle from '~/scripts/components/ResetStyle';
import GlobalStyle from '~/scripts/components/GlobalStyle';

import TopPage from '~/scripts/pages/top/Index';
import RegisterPage from '~/scripts/pages/register/Index';
import HistoryPage from '~/scripts/pages/history/Index';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <ResetStyle />
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={TopPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/history" component={HistoryPage} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
};

export default App;

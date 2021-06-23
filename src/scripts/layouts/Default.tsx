import * as React from 'react';
import styled from 'styled-components';

import AppHeader from '~/scripts/components/AppHeader';
import AppFooter from '~/scripts/components/AppFooter';

const Default: React.FC = ({ children }) => {
  return (
    <>
      <AppHeader />
      <Main>{children}</Main>
      <AppFooter />
    </>
  );
};

const Main = styled.main`
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
`;

export default Default;

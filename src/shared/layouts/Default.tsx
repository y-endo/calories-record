import * as React from 'react';
import styled from 'styled-components';

import AppHeader from '~/shared/components/AppHeader';

const Default: React.FC = ({ children }) => {
  return (
    <>
      <AppHeader />
      <Main>{children}</Main>
    </>
  );
};

const Main = styled.main`
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
`;

export default Default;

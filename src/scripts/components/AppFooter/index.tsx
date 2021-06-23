import * as React from 'react';
import styled from 'styled-components';

import { Text } from '~/scripts/elements/Text';

const AppFooter: React.FC = () => {
  return (
    <Footer>
      <Text as={'p'}>フッター</Text>
    </Footer>
  );
};

const Footer = styled.footer`
  border-top: solid 1px #ccc;
  padding: 20px;
`;

export default AppFooter;

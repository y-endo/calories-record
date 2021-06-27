import * as React from 'react';
import styled from 'styled-components';

import { UText } from '~/scripts/utils/UText';

const AppFooter: React.FC = () => {
  return (
    <Footer>
      <UText as={'p'}>フッター</UText>
    </Footer>
  );
};

const Footer = styled.footer`
  border-top: solid 1px #ccc;
  padding: 20px;
`;

export default AppFooter;

import * as React from 'react';
import styled from 'styled-components';

const AppFooter: React.FC = () => {
  return (
    <Footer>
      <p>フッター</p>
    </Footer>
  );
};

const Footer = styled.footer`
  border-top: solid 1px #ccc;
  padding: 20px;
`;

export default AppFooter;

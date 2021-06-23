import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Text } from '~/scripts/elements/Text';

const AppHeader: React.FC = () => {
  return (
    <Header>
      <StyledLink to="/">
        <Text as={'p'}>ロゴ</Text>
      </StyledLink>
      <Nav>
        <ul>
          <li>
            <StyledLink to="/register">
              <Text>登録</Text>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/history">
              <Text>履歴</Text>
            </StyledLink>
          </li>
        </ul>
      </Nav>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  border-bottom: solid 1px #ccc;
  padding: 20px;
`;

const StyledLink = styled(Link)`
  display: block;
`;

const Nav = styled.nav`
  margin-left: auto;

  ul {
    display: flex;
  }

  li {
    &:nth-child(n + 2) {
      margin-left: 15px;
    }
  }
`;

export default AppHeader;

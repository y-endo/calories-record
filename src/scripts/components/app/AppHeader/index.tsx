import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { UText } from '~/scripts/utils/UText';

const AppHeader: React.FC = () => {
  return (
    <Header>
      <StyledLink to="/">
        <UText as={'p'}>ロゴ</UText>
      </StyledLink>
      <Nav>
        <ul>
          <li>
            <StyledLink to="/register">
              <UText>登録</UText>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/history">
              <UText>履歴</UText>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/user">
              <UText>ユーザー</UText>
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

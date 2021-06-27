import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AppHeader: React.FC = () => {
  return (
    <Header>
      <StyledLink to="/">
        <p>ロゴ</p>
      </StyledLink>
      <Nav>
        <ul>
          <li>
            <StyledLink to="/register">
              <span>登録</span>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/history">
              <span>履歴</span>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/user">
              <span>ユーザー</span>
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

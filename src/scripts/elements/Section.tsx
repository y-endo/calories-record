import styled from 'styled-components';

export const Section = styled.section`
  padding: 50px 0;

  > *:nth-child(n + 2) {
    margin-top: 30px;
  }
`;

export const SubSection = styled.section`
  > *:nth-child(n + 2) {
    margin-top: 30px;
  }
`;

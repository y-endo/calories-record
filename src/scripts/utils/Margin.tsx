import styled from 'styled-components';

interface MarginProps {
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
}

const Margin = styled.div<MarginProps>`
  margin-top: ${props => props.mt}px;
  margin-right: ${props => props.mr}px;
  margin-bottom: ${props => props.mb}px;
  margin-left: ${props => props.ml}px;
`;

Margin.defaultProps = {
  mt: 0,
  mr: 0,
  mb: 0,
  ml: 0
};

export default Margin;

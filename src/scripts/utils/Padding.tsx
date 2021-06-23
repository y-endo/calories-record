import styled from 'styled-components';

interface PaddingProps {
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}

const Padding = styled.div<PaddingProps>`
  padding-top: ${props => props.pt}px;
  padding-right: ${props => props.pr}px;
  padding-bottom: ${props => props.pb}px;
  padding-left: ${props => props.pl}px;
`;

Padding.defaultProps = {
  pt: 0,
  pr: 0,
  pb: 0,
  pl: 0
};

export default Padding;

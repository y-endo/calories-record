import styled from 'styled-components';

interface UPaddingProps {
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}

const UPadding = styled.div<UPaddingProps>`
  padding-top: ${props => props.pt}px;
  padding-right: ${props => props.pr}px;
  padding-bottom: ${props => props.pb}px;
  padding-left: ${props => props.pl}px;
`;

UPadding.defaultProps = {
  pt: 0,
  pr: 0,
  pb: 0,
  pl: 0
};

export default UPadding;

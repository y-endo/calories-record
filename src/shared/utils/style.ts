import styled from 'styled-components';

/**
 * margin
 */
interface MarginProps {
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
}

export const Margin = styled.div<MarginProps>`
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

/**
 * padding
 */
interface PaddingProps {
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}

export const Padding = styled.div<PaddingProps>`
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

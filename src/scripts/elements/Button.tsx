import styled from 'styled-components';

interface ButtonProps {
  fs?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => (props.fs as number) / 10}rem;
  padding-top: ${props => props.pt}px;
  padding-right: ${props => props.pr}px;
  padding-bottom: ${props => props.pb}px;
  padding-left: ${props => props.pl}px;
  border: solid 1px #ccc;
  border-radius: 5px;
  cursor: pointer;
`;

Button.defaultProps = {
  fs: 16,
  pt: 10,
  pr: 15,
  pb: 10,
  pl: 15
};

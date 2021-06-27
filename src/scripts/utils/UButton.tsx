import styled from 'styled-components';

interface UButtonProps {
  fs?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  bdrs?: number;
  bdw?: number;
  bdc?: string;
}

export const UButton = styled.button<UButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => (props.fs as number) / 10}rem;
  padding-top: ${props => props.pt}px;
  padding-right: ${props => props.pr}px;
  padding-bottom: ${props => props.pb}px;
  padding-left: ${props => props.pl}px;
  border-style: solid;
  border-width: ${props => props.bdw}px;
  border-color: ${props => props.bdc};
  border-radius: ${props => props.bdrs}px;
  cursor: pointer;
`;

UButton.defaultProps = {
  fs: 16,
  pt: 10,
  pr: 15,
  pb: 10,
  pl: 15,
  bdrs: 5,
  bdw: 1,
  bdc: '#ccc'
};

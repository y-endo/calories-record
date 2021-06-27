import styled from 'styled-components';

interface UTextProps {
  fs?: number;
  fw?: 'normal' | 'bold';
  lh?: string | number;
  ta?: 'left' | 'center' | 'right';
  c?: string;
}

export const UText = styled.span<UTextProps>`
  font-size: ${props => (props.fs as number) / 10}rem;
  font-weight: ${props => props.fw};
  text-align: ${props => props.ta};
  line-height: ${props => props.lh};
  color: ${props => props.c};
`;

UText.defaultProps = {
  fs: 16,
  fw: 'normal',
  lh: 1.5,
  ta: 'left',
  c: 'inherit'
};

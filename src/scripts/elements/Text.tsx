import styled from 'styled-components';

interface TextProps {
  fs?: number;
  fw?: 'normal' | 'bold';
  lh?: string | number;
  ta?: 'left' | 'center' | 'right';
}

export const Text = styled.span<TextProps>`
  font-size: ${props => (props.fs as number) / 10}rem;
  font-weight: ${props => props.fw};
  text-align: ${props => props.ta};
  line-height: ${props => props.lh};
`;

Text.defaultProps = {
  fs: 16,
  fw: 'normal',
  lh: 1.5,
  ta: 'left'
};

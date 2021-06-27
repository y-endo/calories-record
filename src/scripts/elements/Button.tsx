import styled from 'styled-components';

interface ButtonProps {
  color?: string;
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: filter 0.3s ease-out;

  ${props =>
    props.color === 'primary' &&
    `
      color: #fff;
      border: none;
      background-color: ${props.theme.palette.primary.main};
    `}

  ${props =>
    props.color === 'secondary' &&
    `
      color: #000;
      border: none;
      background-color: ${props.theme.palette.secondary.main};
    `}

  &:hover {
    filter: brightness(1.1);
  }
`;

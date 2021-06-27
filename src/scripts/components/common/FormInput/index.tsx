import * as React from 'react';
import styled from 'styled-components';

import { UText } from '~/scripts/utils/UText';

interface Props {
  label?: string;
  type:
    | 'text'
    | 'search'
    | 'tel'
    | 'url'
    | 'email'
    | 'password'
    | 'datetime'
    | 'date'
    | 'month'
    | 'week'
    | 'time'
    | 'datetime-local'
    | 'number'
    | 'range'
    | 'color'
    | 'checkbox'
    | 'radio'
    | 'file'
    | 'submit'
    | 'image'
    | 'reset'
    | 'button';
  placeholder?: string;
  ref?: React.RefObject<void>;
}

const FormInput = React.forwardRef<HTMLInputElement, Props>(({ label, type, placeholder }, ref) => {
  return (
    <Label>
      {label && <UText>{label}</UText>}
      <Input type={type} placeholder={placeholder} ref={ref} />
    </Label>
  );
});

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;

  &:first-of-type {
    margin-left: 0;
  }
`;

const Input = styled.input.attrs(props => ({
  type: props.type,
  placeholder: props.placeholder
}))`
  font-size: 1.6rem;
  border: solid 1px #ccc;
  padding: 0 10px;
  height: 40px;

  ${UText} + & {
    margin-left: 15px;
  }
`;

export default FormInput;

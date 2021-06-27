import * as React from 'react';
import styled from 'styled-components';

import { UText } from '~/scripts/utils/UText';

interface Props {
  label?: string;
  placeholder?: string;
  ref?: React.RefObject<void>;
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, Props>(({ label, placeholder }, ref) => {
  return (
    <Label>
      {label && <UText>{label}</UText>}
      <Textarea placeholder={placeholder} ref={ref} />
    </Label>
  );
});

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;

  &:first-of-type {
    margin-left: 0;
  }
`;

const Textarea = styled.textarea.attrs(props => ({
  placeholder: props.placeholder
}))`
  width: 100%;
  font-size: 1.6rem;
  border: solid 1px #ccc;
  padding: 10px;
  min-height: 120px;
  resize: vertical;

  ${UText} + & {
    margin-left: 15px;
  }
`;

export default FormTextarea;

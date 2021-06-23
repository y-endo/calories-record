import * as React from 'react';
import styled from 'styled-components';

import { Text } from '~/scripts/elements/Text';

interface Props {
  label?: string;
  placeholder?: string;
  ref?: React.RefObject<void>;
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, Props>(({ label, placeholder }, ref) => {
  return (
    <Label>
      {label && <Text>{label}</Text>}
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

  /* stylelint-disable */
  ${Text} + & {
    margin-left: 15px;
  }
  /* stylelint-enable */
`;

export default FormTextarea;

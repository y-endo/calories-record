import * as React from 'react';
import styled from 'styled-components';

interface Props {
  label?: string;
  type?:
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
  multiline?: boolean;
  ref?: React.RefObject<void>;
}

const TextField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  ({ label, type = 'text', placeholder, multiline = false }, ref) => {
    return (
      <Label>
        {label && <LabelText>{label}</LabelText>}
        {multiline ? (
          <Textarea placeholder={placeholder} ref={ref as React.RefObject<HTMLTextAreaElement>} />
        ) : (
          <Input type={type} placeholder={placeholder} ref={ref as React.RefObject<HTMLInputElement>} />
        )}
      </Label>
    );
  }
);

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;

  &:first-of-type {
    margin-left: 0;
  }
`;

const LabelText = styled.span``;

const Input = styled.input.attrs(props => ({
  type: props.type,
  placeholder: props.placeholder
}))`
  font-size: 1.6rem;
  border: solid 1px #ccc;
  padding: 0 10px;
  width: 180px;
  height: 40px;

  ${LabelText} + & {
    margin-left: 15px;
  }
`;

const Textarea = styled.textarea.attrs(props => ({
  placeholder: props.placeholder
}))`
  width: 100%;
  font-size: 1.6rem;
  border: solid 1px #ccc;
  padding: 10px;
  width: 500px;
  min-height: 120px;
  resize: vertical;

  ${LabelText} + & {
    margin-left: 15px;
  }
`;

export default TextField;

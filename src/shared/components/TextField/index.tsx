import * as React from 'react';
import styled from 'styled-components';

interface Props {
  id: string;
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
  defaultValue?: string | number;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  ref?: React.RefObject<void>;
}

const TextField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  ({ id, label, type = 'text', placeholder, multiline = false, defaultValue, handleChange }, ref) => {
    return (
      <FlexBox>
        {label && <LabelText htmlFor={id}>{label}</LabelText>}
        {multiline ? (
          <Textarea
            id={id}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={handleChange}
            ref={ref as React.RefObject<HTMLTextAreaElement>}
          />
        ) : (
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={handleChange}
            ref={ref as React.RefObject<HTMLInputElement>}
          />
        )}
      </FlexBox>
    );
  }
);

const FlexBox = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;

  &:first-of-type {
    margin-left: 0;
  }
`;

const LabelText = styled.label.attrs(props => ({
  htmlFor: props.htmlFor
}))``;

const Input = styled.input.attrs(props => ({
  id: props.id,
  type: props.type,
  placeholder: props.placeholder,
  defaultValue: props.defaultValue
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
  id: props.id,
  placeholder: props.placeholder,
  defaultValue: props.defaultValue
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

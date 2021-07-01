import * as React from 'react';
import styled from 'styled-components';

interface Props {
  id: string;
  label?: string;
  option: {
    value?: string;
    text: string;
    hidden?: boolean;
  }[];
  defaultValue?: string;
  ref?: React.RefObject<void>;
}

const Select = React.forwardRef<HTMLSelectElement, Props>(({ id, label, option, defaultValue }, ref) => {
  const items = option.map((item, index) => (
    <option key={`item-${index}`} value={item.value} hidden={item.hidden}>
      {item.text}
    </option>
  ));

  return (
    <FlexBox>
      {label && <LabelText htmlFor={id}>{label}</LabelText>}
      <StyledSelect id={id} defaultValue={defaultValue} ref={ref}>
        {items}
      </StyledSelect>
    </FlexBox>
  );
});

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

const StyledSelect = styled.select.attrs(props => ({
  id: props.id,
  defaultValue: props.defaultValue
}))`
  font-size: 1.6rem;
  border: solid 1px #ccc;
  padding: 0 10px;
  height: 40px;

  ${LabelText} + & {
    margin-left: 15px;
  }
`;

export default Select;

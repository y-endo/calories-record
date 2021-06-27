import * as React from 'react';
import styled from 'styled-components';

interface Props {
  label?: string;
  option: {
    value?: string;
    text: string;
    hidden?: boolean;
    selected?: boolean;
  }[];
  ref?: React.RefObject<void>;
}

const Select = React.forwardRef<HTMLSelectElement, Props>(({ label, option }, ref) => {
  const items = option.map((item, index) => (
    <option key={`item-${index}`} value={item.value} hidden={item.hidden} selected={item.selected}>
      {item.text}
    </option>
  ));

  return (
    <Flex>
      {label && <LabelText>{label}</LabelText>}
      <StyledSelect ref={ref}>{items}</StyledSelect>
    </Flex>
  );
});

const Flex = styled.label`
  display: inline-flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;

  &:first-of-type {
    margin-left: 0;
  }
`;

const LabelText = styled.span``;

const StyledSelect = styled.select`
  font-size: 1.6rem;
  border: solid 1px #ccc;
  padding: 0 10px;
  height: 40px;

  ${LabelText} + & {
    margin-left: 15px;
  }
`;

export default Select;

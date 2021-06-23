import * as React from 'react';
import styled from 'styled-components';

import { Text } from '~/scripts/elements/Text';

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

const FormSelect = React.forwardRef<HTMLSelectElement, Props>(({ label, option }, ref) => {
  const items = option.map((item, index) => (
    <option key={`item-${index}`} value={item.value} hidden={item.hidden} selected={item.selected}>
      {item.text}
    </option>
  ));

  return (
    <Flex>
      {label && <Text>{label}</Text>}
      <Select ref={ref}>{items}</Select>
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

const Select = styled.select`
  font-size: 1.6rem;
  border: solid 1px #ccc;
  padding: 0 10px;
  height: 40px;

  ${Text} + & {
    margin-left: 15px;
  }
`;

export default FormSelect;

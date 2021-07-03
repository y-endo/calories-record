import * as React from 'react';

import { StyledLegend, Required } from './style';

type Props = {
  required?: boolean;
};

const Legend: React.FC<Props> = ({ children, required }) => {
  return (
    <StyledLegend>
      <span>{children}</span>
      {required && <Required>必須</Required>}
    </StyledLegend>
  );
};

export default Legend;

import { css } from 'styled-components';

export const FlexColumn = (align = 'center', justify = 'center') => css`
  display: flex;
  flex-direction: column;
  align-items: ${align || 'center'};
  justify-content: ${justify || 'center'};
`;

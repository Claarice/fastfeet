import styled from 'styled-components';

import { lighten } from 'polished';

export const Status = styled.span`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #2ca42b !important;
  font-weight: 700;
  background: ${lighten(0.5, '#2ca42b')};
  border-radius: 12px;
  padding: 7px 7px;
  height: 30px;
  span {
    width: 10px;
    height: 10px;
    margin-right: 3px;
  }
`;

import styled from 'styled-components';

import { lighten } from 'polished';

export const Status = styled.span`
  text-align: center;
  color: ${props => `${props.color} !important`};
  font-weight: 700;
  background: ${props => props.color && lighten(0.4, props.color)};
  border-radius: 12px;
  padding: 7px 7px;
  height: 30px;
  span {
    width: 10px;
    height: 10px;
    margin-right: 3px;
  }
`;

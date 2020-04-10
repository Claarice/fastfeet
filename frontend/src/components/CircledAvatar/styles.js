import styled from 'styled-components';

import { darken } from 'polished';

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.avatarColor};
  border-radius: 50% !important;
  padding: 3%;
  margin-right: 5px;
  color: ${props =>
    props.avatarColor && darken(0.7, props.avatarColor.toString())};
  font-weight: 500;
`;

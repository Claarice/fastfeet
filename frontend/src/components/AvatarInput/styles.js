import styled from 'styled-components';

import { darken } from 'polished';
import CircledAvatar from '~/components/CircledAvatar';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    input {
      display: none;
    }
  }
`;

export const PhotoPlaceHolder = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px dashed #dddddd;
  background: #ffffff;

  justify-content: center;

  span {
    color: #dddddd;
  }
`;

export const PhotoInput = styled.div`
  display: flex;
  img {
    width: 150px;
    height: 150px;
    border: 3px dashed #dddddd;
    border-radius: 50%;
    background: #ffffff;
  }
`;

export const NoAvatarFound = styled(CircledAvatar)`
  width: 150px !important;
  height: 150px !important;
  border: 3px dashed ${props => darken(0.1, props.avatarColor.toString())};
  border-radius: 50%;
  background: ${props => props.avatarColor};
  font-size: 60px;
  font-weight: 500;
  text-align: center;
  padding: 25px;
  color: ${props => darken(0.3, props.avatarColor.toString())};
`;

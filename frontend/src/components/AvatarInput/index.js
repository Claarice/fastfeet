import React from 'react';
import randomColor from 'randomcolor';

import { MdInsertPhoto } from 'react-icons/md';

import {
  Container,
  PhotoPlaceHolder,
  PhotoInput,
  NoAvatarFound,
} from './styles';

export default function AvatarInput() {
  const avatarColor = randomColor({
    count: 1,
    luminosity: 'light',
  });

  return (
    <Container>
      <label htmlFor="avatar">
        <PhotoPlaceHolder>
          <MdInsertPhoto size={40} color="#DDDDDD" />
          <span>Adicionar foto</span>
        </PhotoPlaceHolder>
        <PhotoInput>
          <NoAvatarFound avatarColor={avatarColor} />
          <input type="file" id="avatar" accept="image/*" />
        </PhotoInput>
      </label>
    </Container>
  );
}

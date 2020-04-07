import React from 'react';

import { MdInsertPhoto } from 'react-icons/md';

import { Container, PhotoPlaceHolder, PhotoInput } from './styles';

export default function AvatarInput() {
  return (
    <Container>
      <label htmlFor="avatar">
        <PhotoPlaceHolder>
          <MdInsertPhoto size={40} color="#DDDDDD" />
          <span>Adicionar foto</span>
        </PhotoPlaceHolder>
        <PhotoInput>
          <img
            src="https://api.adorable.io/avatars/175/abott@adorable.png"
            alt="John Doe"
          />
          <input type="file" id="avatar" accept="image/*" />
        </PhotoInput>
      </label>
    </Container>
  );
}

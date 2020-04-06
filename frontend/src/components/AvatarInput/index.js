import React from 'react';

import { MdInsertPhoto } from 'react-icons/md';
import { Container } from './styles';

export default function AvatarInput() {
  return (
    <Container>
      <label htmlFor="avatar">
        <MdInsertPhoto size={40} color="#DDDDDD" />
        <span>Adicionar foto</span>
        <img src="" alt="John Doe" />
        <input type="file" id="avatar" accept="image/*" />
      </label>
    </Container>
  );
}

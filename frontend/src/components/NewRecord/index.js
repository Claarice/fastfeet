import React from 'react';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';

import {
  NewRecordPage,
  NewRecordHeader,
  Title,
  GroupButtons,
  NewRecordButton,
  InputGroup,
} from './styles';

import AvatarInput from '../AvatarInput';

export default function NewRecord() {
  return (
    <NewRecordPage>
      <NewRecordHeader>
        <Title>Cadastro de destinatário</Title>
        <GroupButtons>
          <NewRecordButton type="goBack">
            <MdKeyboardArrowLeft size={24} color="#FFFFFF" />
            <span>VOLTAR</span>
          </NewRecordButton>
          <NewRecordButton type="save">
            <MdCheck size={24} color="#ffffff" />
            <span>SALVAR</span>
          </NewRecordButton>
        </GroupButtons>
      </NewRecordHeader>

      <InputGroup>
        <AvatarInput />
        <span>Nome</span>
        <input type="text" placeholder="" />
      </InputGroup>
    </NewRecordPage>
  );
}

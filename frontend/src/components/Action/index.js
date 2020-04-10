import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { MdCreate, MdDeleteForever, MdVisibility } from 'react-icons/md';

import { Container, ActionBox, EditAction, OpenModal } from './styles';

import ViewRecord from '../ViewRecord';

export default function Action(props) {
  const { visible } = props;

  const [show, setShow] = useState(false);

  function showModal() {
    setShow(!show);
  }

  console.log(show);

  return (
    <>
      <Container>
        <ActionBox visible={visible}>
          <EditAction>
            <OpenModal onClick={() => showModal}>
              <MdVisibility size={20} color="#8E5BE8" />
              Visualizar
            </OpenModal>
          </EditAction>
          <hr />
          <EditAction>
            <MdCreate size={20} color="#4D85EE" />
            <Link to="/edit">Editar</Link>
          </EditAction>
          <hr />
          <EditAction>
            <MdDeleteForever size={20} color="#DE3B3B" />
            <Link to="/delete">Excluir</Link>
          </EditAction>
        </ActionBox>
      </Container>
      <ViewRecord show={show} />
    </>
  );
}

Action.propTypes = {
  visible: PropTypes.element.isRequired,
};

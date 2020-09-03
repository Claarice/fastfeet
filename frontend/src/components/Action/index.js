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

  function handleCloseModal() {
    setShow(false);
  }

  return (
    <>
      <Container>
        <ActionBox visible={visible}>
          <EditAction>
            <OpenModal onClick={showModal}>
              <MdVisibility size={20} color="#8E5BE8" />
              <span>Visualizar</span>
            </OpenModal>
          </EditAction>
          <hr />
          <EditAction>
            <Link to="/edit">
              <MdCreate size={20} color="#4D85EE" />
              <span>Editar</span>
            </Link>
          </EditAction>
          <hr />
          <EditAction>
            <Link to="/delete">
              <MdDeleteForever size={20} color="#DE3B3B" />
              <span>Excluir</span>
            </Link>
          </EditAction>
        </ActionBox>
      </Container>
      <ViewRecord show={show} onShowChange={handleCloseModal} />
    </>
  );
}

Action.propTypes = {
  visible: PropTypes.element.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { Container, ViewBox, Content, InfoTitle } from './styles';

export default function ViewRecord(props) {
  const { show, onShowChange } = props;

  return ReactDOM.createPortal(
    <>
      <Container show={show} onClick={() => onShowChange(false)}>
        <ViewBox
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <Content>
            <InfoTitle>Informações da encomenda </InfoTitle>
            <span>Rua Beethoven, 1729</span>
            <span>Diadema - SP</span>
            <span>09960-580</span>
            <hr />
          </Content>
          <Content>
            <InfoTitle>Datas </InfoTitle>
            <span>
              <strong>Retirada: </strong> 25/01/2020
            </span>
            <span>
              <strong>Entrega: </strong> 25/01/2020
            </span>
            <hr />
          </Content>
          <Content>
            <InfoTitle>Assinatura do destinatário</InfoTitle>
            <img
              src="https://www.abcdt.org.br/wp-content/uploads/Assinatura-Digital-Dr-Helio.jpg"
              alt="Clarice"
            />
          </Content>
        </ViewBox>
      </Container>
    </>,
    document.querySelector('#modal')
  );
}

ViewRecord.propTypes = {
  show: PropTypes.element.isRequired,
};

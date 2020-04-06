import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Content } from './styles';

import logo from '~/assets/logo.png';

export default function Header() {
  const location = useLocation();

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />

          <hr />
          <Link to="/orders" location={location.pathname}>
            ENCOMENDAS
          </Link>
          <Link to="/deliverymen" location={location.pathname}>
            ENTREGADORES
          </Link>
          <Link to="/recipients" location={location.pathname}>
            DESTINATÁRIOS
          </Link>
          <Link to="/delivery/problems" location={location.pathname}>
            PROBLEMAS
          </Link>
        </nav>

        <aside>
          <span>Admin Fastfeet</span>
          <a href="logout">sair do sistema</a>
        </aside>
      </Content>
    </Container>
  );
}

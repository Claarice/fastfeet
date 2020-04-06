import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.png';

export default function SignIn() {
  return (
    <>
      <Form>
        <img src={logo} alt="Fastfeet" />

        <span>Seu e-mail</span>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <span>Sua senha</span>
        <Input name="password" type="password" placeholder="***********" />
        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}

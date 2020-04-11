import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Order from '../pages/Order';
import NewOrder from '../pages/NewOrder';
import ViewOrder from '../pages/ViewOrder';
import Teste from '../pages/Teste';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/orders" exact component={Order} isPrivate />
      <Route path="/order/new" exact component={NewOrder} isPrivate />
      <Route path="/order/view" exact component={ViewOrder} isPrivate />
      <Route path="/teste" exact component={Teste} isPrivate />
    </Switch>
  );
}

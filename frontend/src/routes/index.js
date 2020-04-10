import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Order from '../pages/Order';
import NewOrder from '../pages/NewOrder';
import ViewOrder from '../pages/ViewOrder';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/orders" exact component={Order} />
      <Route path="/order/new" exact component={NewOrder} />
      <Route path="/order/view" exact component={ViewOrder} />
    </Switch>
  );
}

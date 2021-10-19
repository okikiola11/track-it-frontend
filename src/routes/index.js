import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from '../pages/Signin';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/signin" component={SignIn} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

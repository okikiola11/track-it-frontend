import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LogIn from '../pages/Login';
import SignIn from '../pages/Signin';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/login" component={LogIn} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

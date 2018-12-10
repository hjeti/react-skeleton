import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomePage from '../page/HomePage';

export const RoutePaths = {
  HOME: '/',
};

const Routes = () => (
  <Switch>
    <Route path={RoutePaths.HOME} component={HomePage} />
    <Redirect to={RoutePaths.HOME} />
  </Switch>
);

export default Routes;

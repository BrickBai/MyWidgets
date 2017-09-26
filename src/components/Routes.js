import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './Home/Home';
import About from './About';
import NotFound from './NotFound/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
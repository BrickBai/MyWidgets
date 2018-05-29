import React from 'react';
import { Route, Switch } from 'react-router';

import { Home, About, NotFound, Playground } from 'components';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/playground" component={Playground} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

class AppRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact to="/" component={Home} />
        <Route to="/map" />
        <Route to="/weather" />
        <Route to="/ask" />
        <Route to="/emergency" />
      </Switch>
    );
  }
}

export default AppRouter;

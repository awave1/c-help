import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import WeatherPage from './pages/WeatherPage';
import AskPage from './pages/AskPage';

class AppRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/map" component={MapPage} />
        <Route path="/weather" component={WeatherPage} />
        <Route path="/ask" component={AskPage} />
        <Route path="/emergency" />
      </Switch>
    );
  }
}

export default AppRouter;

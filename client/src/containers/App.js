/**
 * Bring all React containers together
 */

import { React, Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeContainer from '../containers/HomeContainer';
import AboutContainer from '../containers/AboutContainer';

class App extents Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/" component={HomeContainer}></Route>
          <Route path="/about" component={AboutContainer}></Route>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
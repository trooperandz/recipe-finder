/**
 * Bring all React containers together
 */

import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainContainer from '../containers/MainContainer';
import NotFound from '../containers/NotFound';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/' component={MainContainer}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Fragment>
    );
  }
}

export default App;

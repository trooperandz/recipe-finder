/**
 * Bring all React containers together
 */

import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainContainer from '../containers/MainContainer';
import NotFound from '../containers/NotFound';

// TODO: Not the prettiest subroute matching for now but it does the job...
class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/' component={MainContainer}></Route>
          <Route exact path='/:id' component={MainContainer}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Fragment>
    );
  }
}

export default App;

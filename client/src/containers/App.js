/**
 * Bring all React containers together
 */

import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeContainer from '../containers/HomeContainer';
import AboutContainer from '../containers/AboutContainer';
import NotFound from '../containers/NotFound';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/' component={HomeContainer}></Route>
          <Route path='/about' component={AboutContainer}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Fragment>
    );
  }
}

export default App;

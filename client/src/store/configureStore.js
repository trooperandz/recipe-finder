/**
 * Get everything talking to the app
 */

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk)),
  );

  return store;
}

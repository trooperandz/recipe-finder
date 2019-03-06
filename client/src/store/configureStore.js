/**
 * Get everything talking to the app
 */

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers/rootReducer';
import sagas from '../actions/sagas';
console.log('sagas: ', sagas.requestSaga);
const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware)),
);

sagaMiddleware.run(sagas.requestSaga);

function configureStore() {
  return store;
};

export default configureStore;

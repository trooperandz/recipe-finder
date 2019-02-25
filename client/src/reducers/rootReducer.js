/**
 * Bring all reducers together into one state object
 */

import { combineReducers } from 'redux';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;

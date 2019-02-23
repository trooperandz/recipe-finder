/**
 * App-wide, container-agnostic reducers
 */

import {
  RECEIVE_HOME_DATA,
  RECEIVE_ABOUT_DATA,
} from '../actions/actionTypes';

const initialState = {
  homeData: [],
  aboutData: [],
};

export default function appReducer(state = initialState, action) {
  const {
    welcomeData
  } = action;

  let newState;

  switch(action.type) {
    case RECEIVE_HOME_DATA:
      newState = {
        ...state,
        homeData,
      };
      return newState;
    case RECEIVE_ABOUT_DATA:
      newState = {
        ...state,
        aboutData,
      };
      return newState;
    default:
      return state;
  }
}
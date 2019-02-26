/**
 * App-wide, container-agnostic reducers
 */

import {
  RECEIVE_RECIPE_DATA,
} from '../actions/actionTypes';

const initialState = {
  latestMealsArr: [],
};

export default function appReducer(state = initialState, action) {
  const {
    latestMealsArr,
  } = action;

  let newState;

  switch (action.type) {
    case RECEIVE_RECIPE_DATA:
      newState = {
        ...state,
        latestMealsArr,
      };
      return newState;
    default:
      return state;
  }
}

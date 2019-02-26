/**
 * App-wide, container-agnostic reducers
 */

import {
  RECEIVE_RECIPE_DATA,
  UPDATE_RECIPE_MODAL_STATUS,
  UPDATE_RECIPE_DETAIL,
  UPDATE_RECIPE_FAVORITES,
  RECEIVE_SEARCH_RESULTS,
  UPDATE_SEARCH_TERM,
  UPDATE_SEARCH_ACTIVE_STATUS,
} from '../actions/actionTypes';

const initialState = {
  latestMealsArr: [],
  isRecipeModalActive: false,
  recipeDetailObj: {},
  recipeFavoritesObj: {},
  searchTerm: '',
  searchResultsArr: [],
  isSearchActive: false,
};

export default function appReducer(state = initialState, action) {
  const {
    latestMealsArr,
    isRecipeModalActive,
    recipeDetailObj,
    recipeFavoritesObj,
    searchTerm,
    searchResultsArr,
    isSearchActive,
  } = action;

  let newState;

  switch (action.type) {
    case RECEIVE_RECIPE_DATA:
      newState = {
        ...state,
        latestMealsArr,
      };
      return newState;
    case UPDATE_RECIPE_MODAL_STATUS:
      newState = {
        ...state,
        isRecipeModalActive: !isRecipeModalActive,
      };
      return newState;
    case UPDATE_RECIPE_DETAIL:
      newState = {
        ...state,
        recipeDetailObj,
      }
      return newState;
    case UPDATE_RECIPE_FAVORITES:
      newState = {
        ...state,
        recipeFavoritesObj,
      };
      return newState;
    case UPDATE_SEARCH_TERM:
      newState = {
        ...state,
        searchTerm,
      };
      return newState;
    case RECEIVE_SEARCH_RESULTS:
      newState = {
        ...state,
        searchResultsArr,
      };
      return newState;
    case UPDATE_SEARCH_ACTIVE_STATUS:
      newState = {
        ...state,
        isSearchActive,
      };
      return newState;
    default:
      return state;
  }
}

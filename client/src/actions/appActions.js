/**
 * App-wide actions
 */

import axios from 'axios';
const { call, put, takeLatest, takeEvery } = require('redux-saga/effects');

import { RECIPE_API_KEY } from '../util/constants';
import { safeParseJSON, formatLatestMeals } from '../util/utils';
import {
  RECEIVE_RECIPE_DATA,
  UPDATE_RECIPE_MODAL_STATUS,
  UPDATE_RECIPE_DETAIL,
  UPDATE_RECIPE_FAVORITES,
  RECEIVE_SEARCH_RESULTS,
  UPDATE_SEARCH_TERM,
  UPDATE_SEARCH_ACTIVE_STATUS,
  REQUEST_SAGA,
  RECEIVE_SAGA,
} from './actionTypes';

/**
 * Fetch today's latest meals
 */
function fetchLatestMeals() {
  return (dispatch) => {
    axios.get(`https://www.themealdb.com/api/json/v1/${RECIPE_API_KEY}/latest.php`)
      .then((response) => {
        if (response && response.data) {
          const { data: { meals = {} } } = response;
          const formattedResponse = formatLatestMeals(meals);

          dispatch(receiveLatestMeals(formattedResponse));
        } else {
          console.log('Response did not return meals...');
        }
      })
      .catch((error) =>  {
        console.log(error);
      });
  };
}

/**
 * Default today's meals data
 */
function receiveLatestMeals(latestMealsArr) {
  return {
    type: RECEIVE_RECIPE_DATA,
    latestMealsArr,
  };
}

/**
 * Determines hide/show of modal
 */
function updateRecipeModalStatus(isRecipeModalActive) {
  return {
    type: UPDATE_RECIPE_MODAL_STATUS,
    isRecipeModalActive,
  }
}

/**
 * Populate the recipe detail modal data
 */
function updateRecipeDetail(recipeDetailObj) {
  return {
    type: UPDATE_RECIPE_DETAIL,
    recipeDetailObj,
  };
}

/**
 *  Maintain sidenav recipe favorites list
 */
function updateRecipeFavorites(recipeFavoritesObj) {
  return {
    type: UPDATE_RECIPE_FAVORITES,
    recipeFavoritesObj,
  };
}

/**
 * Set the search input value
 */
function setSearchTerm(searchTerm) {
  return {
    type: UPDATE_SEARCH_TERM,
    searchTerm,
  };
}

/**
 * Perform an api search on search input submit
 */
function fetchSearchResults(searchTerm) {
  return (dispatch) => {
    axios.get(`https://www.themealdb.com/api/json/v1/${RECIPE_API_KEY}/search.php?s=${searchTerm}`)
      .then((response) => {
        if (response && response.data) {
          const { data: { meals = {} } } = response;
          const formattedResponse = formatLatestMeals(meals);

          dispatch(receiveSearchResults(formattedResponse));
          dispatch(updateSearchActiveStatus(true));
        } else {
          console.log('Response did not return search results...');
        }
      })
      .catch((error) =>  {
        console.log(error);
      });
  };
}

/**
 * Determines display status of search-specific items
 */
function updateSearchActiveStatus(isSearchActive) {
  return {
    type: UPDATE_SEARCH_ACTIVE_STATUS,
    isSearchActive: isSearchActive,
  };
}

function receiveSearchResults(searchResultsArr) {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    searchResultsArr,
  };
}

/**
 * If user loads a direct meal id into the url, load the modal recipe details
 */
function fetchRecipeDetail(recipeId) {
  return (dispatch) => {
    axios.get(`https://www.themealdb.com/api/json/v1/${RECIPE_API_KEY}/lookup.php?i=${recipeId}`)
      .then((response) => {
        if (response && response.data) {
          const { data: { meals = [] } } = response;
          const formattedResponse = formatLatestMeals(meals);

          const {
            recipeId,
            recipeTitle,
            recipeInstructions,
            ingredientArr,
            recipeImageUrl,
          } = formattedResponse[0];

          const imageStyle = { backgroundImage: `url('${recipeImageUrl}')`};

          dispatch(updateRecipeDetail({
            recipeId,
            recipeTitle,
            recipeInstructions,
            ingredientArr,
            imageStyle,
          }));

          dispatch(updateRecipeModalStatus(false)); // double negative in reducer, make it true
        } else {
          console.log('Response did not return recipe detail...');
        }
      })
      .catch((error) =>  {
        console.log(error);
      });
  }
}

function* requestSaga() { console.log('requesting saga');
  yield takeEvery(REQUEST_SAGA, fetchSaga);
}

/**
 *
 */
function* fetchSaga() { console.log('fetching saga...')
  try {
    let { data } = yield call(axios.get(`https://www.themealdb.com/api/json/v1/${RECIPE_API_KEY}/latest.php`));
    console.log('data: ', data);
    yield put(receiveSaga(data));
  } catch (e) {
    console.log('Error fetching saga: ', e);
  }
      // .then((response) => {
      //   if (response && response.data) {
      //     const { data: { meals = {} } } = response;
      //     const formattedResponse = formatLatestMeals(meals);

      //     dispatch(receiveLatestMeals(formattedResponse));
      //   } else {
      //     console.log('Response did not return meals...');
      //   }
      // })
}

function receiveSaga(sagaData) {
  console.log('receiveSaga ran, data = ', sagaData);
  return {
    type: RECEIVE_SAGA,
    sagaData,
  };
}

export default {
  fetchLatestMeals,
  receiveLatestMeals,
  updateRecipeModalStatus,
  updateRecipeDetail,
  updateRecipeFavorites,
  setSearchTerm,
  fetchSearchResults,
  updateSearchActiveStatus,
  fetchRecipeDetail,
  requestSaga,
  fetchSaga,
};

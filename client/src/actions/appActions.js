/**
 * App-wide actions
 */

import axios from 'axios';
import { RECIPE_API_KEY } from '../util/constants';
import { RECEIVE_RECIPE_DATA } from './actionTypes';
import { safeParseJSON, formatLatestMeals } from '../util/utils';

function fetchLatestMeals() { console.log('fetching meals...')
  return (dispatch) => {
    axios.get(`https://www.themealdb.com/api/json/v1/${RECIPE_API_KEY}/latest.php`)
      .then((response) => { console.log('response: ', response.data.meals);
        // const parsedResponse = safeParseJSON(response);
        if (response && response.data) {
          const { data: { meals = {} } } = response;
          const formattedResponse = formatLatestMeals(meals);
          console.log('formattedResponse: ', formattedResponse);

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

function receiveLatestMeals(latestMealsArr) {
  return {
    type: RECEIVE_RECIPE_DATA,
    latestMealsArr,
  };
}

export default {
  fetchLatestMeals,
  receiveLatestMeals,
};

/**
 * App-wide actions
 */

import axios from 'axios';
const { call, put, takeLatest, takeEvery } = require('redux-saga/effects');

import { RECIPE_API_KEY } from '../util/constants';
import { safeParseJSON, formatLatestMeals } from '../util/utils';
import {
  REQUEST_SAGA,
  RECEIVE_SAGA,
} from './actionTypes';

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
  requestSaga,
}

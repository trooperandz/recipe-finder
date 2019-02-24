/**
 * App-wide actions
 */

import { homeData, aboutData } from '../store/testData';

import {
 RECEIVE_HOME_DATA,
 RECEIVE_ABOUT_DATA,
} from './actionTypes';

function fetchHomeData() {
  return (dispatch) => {
    dispatch(receiveHomeData(homeData));
  };
}

function receiveHomeData(homeData) {
  return {
    type: RECEIVE_HOME_DATA,
    homeData,
  };
}

function fetchAboutData() {
  return (dispatch) => {
    dispatch(receiveAboutData(aboutData));
  };
}

function receiveAboutData(aboutData) {
  return {
    type: RECEIVE_ABOUT_DATA,
    aboutData,
  };
}

export default {
  fetchHomeData,
  receiveHomeData,
  fetchAboutData,
  receiveAboutData,
};
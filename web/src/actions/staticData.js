import {
  USER_INTERESTS_SUCCESS,
  USER_INTERESTS_FAILURE,
  USER_REFS_SUCCESS,
  USER_REFS_FAILURE,
  COUNTRIES_SUCCESS,
  COUNTRIES_FAILURE
} from '../constants/actionTypes';

import * as StaticData from '../api/staticData.js';
import { createAction } from 'redux-actions';

export const userInterestsSuccess = createAction(USER_INTERESTS_SUCCESS);
export const userInterestsFailure = createAction(USER_INTERESTS_FAILURE);

export function requestUserInterests() {
  return dispatch => {;
    return StaticData.requestUserInterests()
      .then(data => dispatch(userInterestsSuccess(data)))
      .catch(error => dispatch(userInterestsFailure(error)));
  };
}

export const userRefsSuccess = createAction(USER_REFS_SUCCESS);
export const userRefsFailure = createAction(USER_REFS_FAILURE);

export function requestUserRefs() {
  return dispatch => {;
    return StaticData.requestUserRefs()
      .then(data => dispatch(userRefsSuccess(data)))
      .catch(error => dispatch(userRefsFailure(error)));
  };
}

export const countriesSuccess = createAction(COUNTRIES_SUCCESS);
export const countriesFailure = createAction(COUNTRIES_FAILURE);

export function countries() {
  return dispatch => {;
    return StaticData.countries()
      .then(data => dispatch(countriesSuccess(data)))
      .catch(error => dispatch(countriesFailure(error)));
  };
}

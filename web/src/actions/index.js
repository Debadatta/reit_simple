import { INIT_REQUEST, INIT_SUCCESS, INIT_FAILURE, UPDATE_PAGE_TITLE } from '../constants/actionTypes';
import { init } from '../api/init.js';
import { createAction } from 'redux-actions';

export const updatePageTitle = title => ({ type: UPDATE_PAGE_TITLE, payload: title });

export const initRequest = createAction(INIT_REQUEST);
export const initSuccess = createAction(INIT_SUCCESS);
export const initFailure = createAction(INIT_FAILURE);

export function initApp() {
  return dispatch => {
    dispatch(initRequest());
    return init()
      .then(data => dispatch(initSuccess(data)))
      .catch(error => dispatch(initFailure(error)));
  };
}

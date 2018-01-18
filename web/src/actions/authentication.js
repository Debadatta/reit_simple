import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  RESET_TOKEN,
//  CLIENT_MODE_REQUEST,
  CLIENT_MODE_SUCCESS,
  EXIT_CLIENT_MODE_SUCCESS,
  REQUEST_MFA_CODE_SUCCESS,
  REQUEST_MFA_CODE_FAILURE,
  MFA_CODE_VERIFY_SUCCESS,
  MFA_CODE_VERIFY_FAILURE,
  HIDE_MFA_FLASH_MESSAGE
} from '../constants/actionTypes';
import * as Auth from '../api/authentication.js';
import { createAction } from 'redux-actions';

export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN_FAILURE);

export function requestLogin(loginData) {
  return dispatch => {
    dispatch({ type: LOGIN_REQUEST });
    return Auth.login(loginData)
      .then(data => dispatch(loginSuccess(data)))
      .catch(error => dispatch(loginFailure(error)));
  };
}

const loadUserSuccess = createAction(LOAD_USER_SUCCESS);
const loadUserFailure = createAction(LOAD_USER_FAILURE);

export function resetToken() {
  localStorage.removeItem('jwtToken');
  return { type: RESET_TOKEN };
}

export function loadCurrentUser() {
  return dispatch => {
    return Auth.loadCurrentUser()
      .then(data => dispatch(loadUserSuccess(data)))
      .catch(error => dispatch(loadUserFailure(error)));
  };
}

const clientModeSuccess = createAction(CLIENT_MODE_SUCCESS);

export function requestClientMode(projectId: number) {
  return dispatch => {
    return Auth.requestClientMode(projectId).then(() => dispatch(clientModeSuccess({ spoofClientProjectId: projectId })));
  };
}

export function exitClientMode() {
  return dispatch => {
    return Auth.exitClientMode().then(_ => dispatch({ type: EXIT_CLIENT_MODE_SUCCESS }));
  };
}

export function logout() {
  return dispatch => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem('jwtToken');
    return Auth.logout();
  };
}

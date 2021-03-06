import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGIN_FAILURE,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SOCIAL_SIGNUP_SUCCESS,
  SOCIAL_SIGNUP_FAILURE,
  LOGOUT,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  RESET_TOKEN,
  SIGNUP_HIDE_FLASH_MESSAGE,
  SOCIAL_LOGIN_FLASH_MESSAGE,
  SOCIAL_CONNECT_SUCCESS,
  SOCIAL_CONNECT_FAILURE
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

export const socialLoginSuccess = createAction(SOCIAL_LOGIN_SUCCESS);
export const socialLoginFailure = createAction(SOCIAL_LOGIN_FAILURE);

export function handleSocialLogin(user) {
  return dispatch => {
    return Auth.socialLogin(user)
      .then(data => dispatch(socialLoginSuccess(data)))
      .catch(error => dispatch(socialLoginFailure(error)));
  };
}

export const connectUserToSocialSuccess = createAction(SOCIAL_CONNECT_SUCCESS);
export const connectUserToSocialFailure = createAction(SOCIAL_CONNECT_FAILURE);

export function connectUserToSocial(user) {
  return dispatch => {
    return Auth.connectUserToSocial(user)
      .then(data => dispatch(connectUserToSocialSuccess(data)))
      .catch(error => dispatch(connectUserToSocialFailure(error)));
  };
}

export const signupSuccess = createAction(SIGNUP_SUCCESS);
export const signupFailure = createAction(SIGNUP_FAILURE);

export function requestSignup(data) {
  return dispatch => {
    return Auth.signup(data)
      .then(data => dispatch(signupSuccess(data)))
      .catch(error => dispatch(signupFailure(error)));
  };
}

export const socialSignupSuccess = createAction(SOCIAL_SIGNUP_SUCCESS);
export const socialSignupFailure = createAction(SOCIAL_SIGNUP_FAILURE);

export function handleSocialSignup(user) {
  return dispatch => {
    return Auth.socialSignup(user)
      .then(data => dispatch(socialSignupSuccess(data)))
      .catch(error => dispatch(socialSignupFailure(error)));
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


export function logout() {
  return dispatch => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem('jwtToken');
    return Auth.logout();
  };
}

export const hideSignupPopupMessage = createAction(SIGNUP_HIDE_FLASH_MESSAGE);

export const hideSocialPopupMessage = createAction(SOCIAL_LOGIN_FLASH_MESSAGE);

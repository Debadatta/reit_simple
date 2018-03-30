import { createAction } from 'redux-actions';

import {
  PASSWORD_RESET_LINK_SEND_SUCCESS,
  PASSWORD_RESET_LINK_SEND_FAILURE,
  RESET_PASSWORD_REQUEST_SUCCESS,
  RESET_PASSWORD_REQUEST_FAILURE,
  RESET_PASSWORD_TOKEN_INFO_FAILURE,
  RESET_PASSWORD_TOKEN_INFO_SUCCESS,
  USER_PROFILE_SUCCESS
} from '../constants/actionTypes';

import * as Users from '../api/users';

const passwordResetLinkSendSuccess = createAction(PASSWORD_RESET_LINK_SEND_SUCCESS);
const passwordResetLinkSendFailure = createAction(PASSWORD_RESET_LINK_SEND_FAILURE);

export function sendPasswordResetLink(emailId) {
  return dispatch => {
    return Users.sendPasswordResetLink(emailId)
      .then(data => dispatch(passwordResetLinkSendSuccess(data)))
      .catch(error => dispatch(passwordResetLinkSendFailure(error)));
  };
}

const resetPasswordSuccess = createAction(RESET_PASSWORD_REQUEST_SUCCESS);
const resetPasswordFailure = createAction(RESET_PASSWORD_REQUEST_FAILURE);

export function resetPasswordRequest(params) {
  return dispatch => {
    return Users.resetPasswordRequest(params)
      .then(data => dispatch(resetPasswordSuccess(data)))
      .catch(error => dispatch(resetPasswordFailure(error)));
  };
}

const fetchResetPasswordUserInfoSuccess = createAction(RESET_PASSWORD_TOKEN_INFO_SUCCESS);
const fetchResetPasswordUserInfoFailure = createAction(RESET_PASSWORD_TOKEN_INFO_FAILURE);

export function fetchResetPasswordUserInfo(token) {
  return dispatch => {
    return Users.fetchResetPasswordUserInfo(token)
      .then(data => dispatch(fetchResetPasswordUserInfoSuccess(data)))
      .catch(error => dispatch(fetchResetPasswordUserInfoFailure(error)));
  };
}

const userProfileSuccess = createAction(USER_PROFILE_SUCCESS);

export function requestUserProfile() {
  return dispatch => {
    return Users.requestUserProfile()
      .then(data => dispatch(userProfileSuccess(data)));
  }
}

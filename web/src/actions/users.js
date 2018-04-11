import { createAction } from 'redux-actions';

import {
  PASSWORD_RESET_LINK_SEND_SUCCESS,
  PASSWORD_RESET_LINK_SEND_FAILURE,
  RESET_PASSWORD_REQUEST_SUCCESS,
  RESET_PASSWORD_REQUEST_FAILURE,
  RESET_PASSWORD_TOKEN_INFO_FAILURE,
  RESET_PASSWORD_TOKEN_INFO_SUCCESS,
  USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAILURE,
  EMAIL_NOTIFICATION_SUCCESS,
  EMAIL_PREFERENCE_SUCCESS,
  UPDATE_EMAIL_NOTIFICATION_SUCCESS,
  UPDATE_EMAIL_PREFERENCE_SUCCESS
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

const updateUserProfileSuccess = createAction(UPDATE_USER_PROFILE_SUCCESS);
const updateUserProfileFailure = createAction(UPDATE_USER_PROFILE_FAILURE);

export function updateUserProfile(data) {
  return dispatch => {
    return Users.updateUserProfile(data)
      .then(data => dispatch(updateUserProfileSuccess(data)))
      .catch(error => dispatch(updateUserProfileFailure(error)))
  }
}

const requestEmailNotificationSettingSuccess = createAction(EMAIL_NOTIFICATION_SUCCESS);

export function requestEmailNotificationSetting() {
  return dispatch => {
    return Users.requestEmailNotificationSetting()
      .then(data => dispatch(requestEmailNotificationSettingSuccess(data)));
  }
}

const requestEmailPreferenceSettingSuccess = createAction(EMAIL_PREFERENCE_SUCCESS);

export function requestEmailPreferenceSetting() {
  return dispatch => {
    return Users.requestEmailPreferenceSetting()
      .then(data => dispatch(requestEmailPreferenceSettingSuccess(data)));
  }
}

const updateEmailNotificationSettingSuccess = createAction(UPDATE_EMAIL_NOTIFICATION_SUCCESS);

export function updateEmailNotificationSetting(params) {
  return dispatch => {
    return Users.updateEmailNotificationSetting(params)
      .then(data => dispatch(updateEmailNotificationSettingSuccess(data)));
  }
}

const updateEmailPreferenceSettingSuccess = createAction(UPDATE_EMAIL_PREFERENCE_SUCCESS);

export function updateEmailPreferenceSetting(params) {
  return dispatch => {
    return Users.updateEmailPreferenceSetting(params)
      .then(data => dispatch(updateEmailPreferenceSettingSuccess(data)));
  }
}
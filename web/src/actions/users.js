import { createAction } from 'redux-actions';

import {
  PASSWORD_RESET_LINK_SEND_SUCCESS,
  PASSWORD_RESET_LINK_SEND_FAILURE
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

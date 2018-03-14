import {
  PASSWORD_RESET_LINK_SEND_SUCCESS,
  PASSWORD_RESET_LINK_SEND_FAILURE,
  SETUP_USER_SUCCESS,
  SETUP_USER_FAILURE,
  ACTIVATE_USER_REQUEST_SUCCESS,
  ACTIVATE_USER_REQUEST_FAILURE,
  RESET_PASSWORD_REQUEST_SUCCESS,
  RESET_PASSWORD_REQUEST_FAILURE
} from '../constants/actionTypes';

export default function user(state = { id: null, errors: null, message: null }, action) {
  switch (action.type) {
    case PASSWORD_RESET_LINK_SEND_SUCCESS:
      return { ...state, message: action.payload.message, errors: null };
    case PASSWORD_RESET_LINK_SEND_FAILURE:
    case SETUP_USER_FAILURE:
    case ACTIVATE_USER_REQUEST_FAILURE:
      return { ...state, errors: action.payload.response.errors, message: null };
    case SETUP_USER_SUCCESS:
    case ACTIVATE_USER_REQUEST_SUCCESS:
      return { ...state, message: action.payload.message, errors: null };
    case RESET_PASSWORD_REQUEST_SUCCESS:
      return { ...state, errors: null };
    case RESET_PASSWORD_REQUEST_FAILURE:
      return { ...state, errors: action.payload.response.errors };
    default:
      return state;
  }
}

import {
  PASSWORD_RESET_LINK_SEND_SUCCESS,
  PASSWORD_RESET_LINK_SEND_FAILURE,
  SETUP_USER_SUCCESS,
  SETUP_USER_FAILURE,
  ACTIVATE_USER_REQUEST_SUCCESS,
  ACTIVATE_USER_REQUEST_FAILURE,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
  ADD_NEW_FIRM_USER,
  ADD_NEW_FIRM_USER_SUCCESS,
  ADD_NEW_FIRM_USER_FAILURE,
  REQUEST_USER_UPDATE,
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
    case ADD_NEW_FIRM_USER:
    case REQUEST_USER_UPDATE:
      return { ...state, processing: true, errors: null, message: null };
    case USER_UPDATE_SUCCESS:
    case ADD_NEW_FIRM_USER_SUCCESS:
      return { ...state, message: action.payload.meta ? action.payload.meta.message : null, processing: false, errors: null };
    case ADD_NEW_FIRM_USER_FAILURE:
    case USER_UPDATE_FAILURE:
      return { ...state, errors: action.payload.response.errors, processing: false, message: null };
    default:
      return state;
  }
}

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../constants/actionTypes';

export default function authentication(state = { currentUserId: null }, action) {
  switch (action.type) {
    case LOAD_USER_SUCCESS: //return user, status = authenticated and make loading = false
    case LOGIN_SUCCESS:
      const metaData = action.payload.meta ? action.payload.meta : {};
      return {
        ...state,
        currentUserId: action.payload.data.id,
        status: 'authenticated'
      };
    case LOGIN_FAILURE:
      return { ...state, status: null, errors: action.payload.response.errors };
    case LOGOUT:
      return { status: 'logout', currentUserId: null, data: null };
    case LOAD_USER_FAILURE:
      return { ...state, data: null, status: null };
    case SIGNUP_SUCCESS:
      return { ...state, currentUserId: action.payload.data.id }
    case SIGNUP_FAILURE:
      return { ...state, currentUserId: null, errors: action.payload.response.errors }
    default:
      return state;
  }
}

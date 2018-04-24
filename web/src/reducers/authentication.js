import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGIN_FAILURE,
  SOCIAL_SIGNUP_SUCCESS,
  SOCIAL_SIGNUP_FAILURE,
  LOGOUT,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_HIDE_FLASH_MESSAGE,
  SOCIAL_LOGIN_FLASH_MESSAGE,
  SOCIAL_CONNECT_FAILURE
} from '../constants/actionTypes';

export default function authentication(state = { currentUserId: null, userExist: false }, action) {
  switch (action.type) {
    case LOAD_USER_SUCCESS: //return user, status = authenticated and make loading = false
    case LOGIN_SUCCESS:
    case SOCIAL_SIGNUP_SUCCESS:
    case SOCIAL_LOGIN_SUCCESS:
      const metaData = action.payload.meta ? action.payload.meta : {};
      return {
        ...state,
        currentUserId: action.payload.data.id,
        status: 'authenticated'
      };
    case LOGIN_FAILURE:
      return { ...state, status: null, errors: action.payload.response.errors, userExist: action.payload.response.meta ? action.payload.response.meta.userExist : false };
    case SOCIAL_LOGIN_FAILURE:
    case SOCIAL_SIGNUP_FAILURE:
    case SOCIAL_CONNECT_FAILURE:
      return { ...state, status: null, socialError: action.payload.response.errors, userExist: action.payload.response.meta ? action.payload.response.meta.userExist : false };
    case SIGNUP_HIDE_FLASH_MESSAGE:
      return { ...state, userExist: false };
    case SOCIAL_LOGIN_FLASH_MESSAGE:
      return { ...state, socialError: null };
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

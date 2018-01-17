import { INIT_REQUEST, INIT_SUCCESS, INIT_FAILURE } from '../constants/actionTypes';

export default function init(state = { id: null, errors: null, loading: false }, action) {
  switch (action.type) {
    case INIT_REQUEST:
      return { ...state, errors: null, loading: true };
    case INIT_SUCCESS:
      if (action.payload && action.payload.data) {
        return {
          ...state,
          ...action.payload.data.attributes,
          id: action.payload.data.id,
          errors: null,
          loading: false
        };
      } else {
        return { ...state, id: null, errors: null, loading: false, mainSubdomain: true };
      }
    case INIT_FAILURE:
      return { ...state, errors: action.payload.response ? action.payload.response.errors : null, loading: false };
    default:
      return state;
  }
}

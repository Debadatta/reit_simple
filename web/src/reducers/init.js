import { HEADER_TRANSPERENCY } from '../constants/actionTypes';

export default function init(state = { transperency: true }, action) {
  switch (action.type) {
    case HEADER_TRANSPERENCY:
      return { ...state, transperency: action.payload };
    default:
      return state;
  }
}

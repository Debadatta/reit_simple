import { DEAL_CATEGORIES, ADD_NEW_DEAL_CATEGORIES_FAILURE, ADD_NEW_DEAL_CATEGORIES_SUCCESS } from '../constants/actionTypes';

import { requestDealCategories, addNewCategory } from '../api/categories.js';
import { createAction } from 'redux-actions';

export const addNewCategorySuccess = createAction(ADD_NEW_DEAL_CATEGORIES_SUCCESS);
export const addNewCategoryFailure = createAction(ADD_NEW_DEAL_CATEGORIES_FAILURE);

export function createDealCategory(params) {
  return dispatch => {
    return addNewCategory(params)
      .then(data => dispatch(addNewCategorySuccess(data)))
      .catch(error => dispatch(addNewCategoryFailure(error)));
  };
}

export const dealCategorySuccess = createAction(DEAL_CATEGORIES);

export function dealCategories() {
  return dispatch => {
    return requestDealCategories()
      .then(data => dispatch(dealCategorySuccess(data)));
  };
}

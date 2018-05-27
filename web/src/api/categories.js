import ajax from './ajax';

export function requestDealCategories() {
  return ajax("/deal_categories");
}

export function addNewCategory(params) {
  return ajax("/deal_categories", { method: 'POST', body: params });
}

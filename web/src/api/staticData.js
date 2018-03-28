import ajax from './ajax';

export function requestUserInterests() {
  return ajax("/user_interests");
}

export function requestUserRefs() {
  return ajax("/user_refs");
}

export function countries() {
  return ajax("/countries");
}

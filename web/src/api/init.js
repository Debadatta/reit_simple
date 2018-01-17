import ajax from './ajax';

export function init() {
  return ajax('/init');
}

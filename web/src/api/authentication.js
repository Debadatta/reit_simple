import ajax from './ajax';
import queryString from 'query-string';

export function login(loginData: { email: string, password: string }) {
  return ajax('/authentication/login', { method: 'POST', body: loginData });
}

export function signup(signupData: Object) {
  return ajax('/authentication/signup', { method: 'POST', body: signupData });
}

export function loadCurrentUser() {
  return ajax('/authentication/identity');
}

export function logout(token: string) {
  return ajax('/authentication/logout');
}

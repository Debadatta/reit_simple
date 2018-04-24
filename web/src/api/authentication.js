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

export function socialLogin(user) {
  return ajax(`/omniauth_callbacks/login`, { method: 'POST', body: {user} });
}

export function socialSignup(user) {
  return ajax(`/omniauth_callbacks/signup`, { method: 'POST', body: {user} });
}

export function connectUserToSocial(user) {
  return ajax(`/omniauth_callbacks/connect`, { method: 'POST', body: {user} });
}

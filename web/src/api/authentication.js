import ajax from './ajax';
import queryString from 'query-string';

export function login(loginData: { email: string, password: string }) {
  return ajax('/authentication/login', { method: 'POST', body: loginData });
}

export function loadCurrentUser() {
  return ajax('/authentication/identity');
}

export function requestClientMode(projectId: number) {
  return ajax(`/authentication/client_mode?project_id=${projectId}`);
}

export function exitClientMode() {
  return ajax('/authentication/exit_client_mode');
}

export function logout(token: string) {
  return ajax('/authentication/logout');
}

export function requestMfaCode(params: Object) {
  return ajax(`/authentication/mfa_code?${queryString.stringify(params)}`);
}

export function verifyMfaCode(params: Object) {
  return ajax(`/authentication/mfa_update`, { method: 'PUT', body: params });
}

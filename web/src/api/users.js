import ajax from './ajax';
import queryString from 'query-string';
import { client_url } from './ajax';

export function requestFirmUsers(params: Object) {
  return ajax(`/users?${queryString.stringify(params)}`);
}

export function updateUserPassword(userId: number, data: { password: string, passwordConfirmation: string }) {
  return ajax('/users/' + userId, { method: 'PUT', body: { user: data } });
}

export function sendPasswordResetLink(emailId: string) {
  return ajax('/forgot', { method: 'POST', body: { email: emailId } });
}

export function resetPasswordRequest(params: {
  user: { password: string, passwordConfirmation: string },
  resetCode: string
}) {
  return ajax(`/reset/${params.resetCode}`, { method: 'POST', body: { user: params.user } });
}

export function fetchResetPasswordUserInfo(resetCode: string) {
  return ajax('/reset/' + resetCode);
}

export function requestUserDetail(userId: number) {
  return ajax('/users/' + userId);
}

export function setupUser(resetCode: string) {
  return ajax('/setup/' + resetCode);
}

export function setupUserRequest(params: Object) {
  return ajax(`/setup/${params.resetCode}`, { method: 'POST', body: { user: params.user } });
}

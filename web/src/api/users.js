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

export function requestUserProfile() {
  return ajax('/users/profile');
}

export function updateUserProfile(data: Object) {
  return ajax('/users/profile', { method: 'PUT', body: { user: data } });
}

export function setupUser(resetCode: string) {
  return ajax('/setup/' + resetCode);
}

export function setupUserRequest(params: Object) {
  return ajax(`/setup/${params.resetCode}`, { method: 'POST', body: { user: params.user } });
}

export function requestEmailNotificationSetting() {
  return ajax('/email_notification_settings');
}

export function requestEmailPreferenceSetting() {
  return ajax('/email_preference_settings');
}

export function updateEmailNotificationSetting(params) {
  return ajax('/email_notification_settings', {method: "PUT", body: params});
}

export function updateEmailPreferenceSetting(params) {
  return ajax('/email_preference_settings', {method: "PUT", body: params});
}
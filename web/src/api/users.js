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

export function requestActiveUsers() {
  return ajax('/users?onlyActiveRole=true');
}

export function requestUserDetail(userId: number) {
  return ajax('/users/' + userId);
}

export function activateUserRequest(activationCode: string) {
  return ajax('/activate/' + activationCode);
}

export function setupUser(resetCode: string) {
  return ajax('/setup/' + resetCode);
}

export function setupUserRequest(params: Object) {
  return ajax(`/setup/${params.resetCode}`, { method: 'POST', body: { user: params.user } });
}

export function requestUserRelatedProjects(userId: number) {
  return ajax(`/users/${userId}/user_related_projects`);
}

export function updateFirmUser(userId: number, data: Object) {
  return ajax(`/users/${userId}`, { method: 'PUT', body: { user: data }, formData: true });
}

export function addNewFirmUser(data: Object) {
  return ajax('/users', { method: 'POST', body: data });
}

export function bulkUserDelete(data: Object) {
  return ajax('/users/bulk_delete', { method: 'DELETE', body: data });
}

export function bulkUserRoleChange(data: Object) {
  return ajax('/users/bulk_role_change', { method: 'PUT', body: data });
}

export function bulkUserActivate(data: Object) {
  return ajax('/users/bulk_activate', { method: 'PUT', body: data });
}

export function bulkUserDeactivate(data: Object) {
  return ajax('/users/bulk_deactivate', { method: 'PUT', body: data });
}

export function bulkUserSendLoginDetails(data: Object) {
  return ajax('/users/bulk_send_login_details', { method: 'POST', body: data });
}

export function requestUserRoles() {
  return ajax('/users/roles');
}

export function usersExportUrl() {
  return client_url('/users/export_report');
}

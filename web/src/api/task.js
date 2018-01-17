import ajax from './ajax';
import queryString from 'query-string';

export function requestTaskList(params: Object) {
  return ajax(`/tasks?${queryString.stringify(params)}`);
}

export function requestAssigneeList() {
  return ajax('/tasks/assignees');
}

export function requestAddTask(params: Object) {
  return ajax('/tasks', { method: 'POST', body: params });
}

export function requestUpdateTask(params: Object) {
  return ajax(`/tasks/${params.task.id}`, { method: 'PUT', body: params });
}

export function requestTaskDetail(taskId: number) {
  return ajax('/tasks/' + taskId);
}

export function requestDeleteTask(taskId: number) {
  return ajax(`/tasks/${taskId}`, { method: 'DELETE' });
}

export function requestMarkTaskAsComplete(taskIds) {
  return ajax(`/tasks/mark_done`, { method: 'POST', body: { ids: taskIds } });
}

export function requestOutstandingTasks() {
  return ajax(`/tasks/outstanding_tasks`);
}

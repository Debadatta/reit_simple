import ajax from './ajax';
import queryString from 'query-string';

export function requestTagList(params?: { tags: string }) {
  return ajax(`/tags?${queryString.stringify(params)}`);
}

export function requestCreateTag(params: { name: string, description: string }) {
  return ajax('/tags', { method: 'POST', body: { tag: params } });
}

export function requestUpdateTag(params: { id: number, tag: { name: string, description: string } }) {
  return ajax(`/tags/${params.id}`, { method: 'PUT', body: { tag: params.tag } });
}

export function requestDeleteTag(tagId: number) {
  return ajax(`/tags/${tagId}`, { method: 'DELETE' });
}

export function requestToAddNewTag(data: { taggable_type: string, taggable_id: number, tag_name: string }) {
  return ajax('/tagged_objects', { method: 'POST', body: data });
}

export function requestRemoveTag(data: { taggable_type: string, taggable_id: number, tag_id: number }) {
  return ajax(`/tagged_objects/${data.tag_id}`, { method: 'DELETE', body: data });
}

export function requestTagRelatableObjectCount(tagId) {
  return ajax(`/tags/${tagId}/show_relatable_object`);
}

export function requestDownloadTag() {
  return ajax('/tags/export');
}

export function requestTaggableObjects(params) {
  const paramsObject = queryString.stringify({ tagIds: params }, { arrayFormat: 'bracket' });
  return ajax(`/tagged_objects/companies?${paramsObject}`);
}

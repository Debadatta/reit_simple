import _ from 'lodash';
import immutable from 'object-path-immutable';

const defaultEntities = {
  users: {},
  userInterests: {},
  userRefs: {},
  countries: {},
  emailNotificationSettings: {},
  emailPreferenceSettings: {}
};

export default function entities(state = defaultEntities, action) {
  if (!action.error && action.payload) {
    const imm = immutable(state);

    if (action.payload.data) {
      let rows = action.payload.data;

      if (!Array.isArray(rows)) {
        rows = [rows];
      }

      rows.forEach(row => setRecord(state, imm, row));
    }

    if (action.payload.included) {
      let rows = action.payload.included;

      if (!Array.isArray(rows)) {
        rows = [rows];
      }

      rows.forEach(row => setRecord(state, imm, row));
    }

    return imm.value();
  }

  return state;
}

function setRecord(state, imm, row) {
  if (!row.id) return;

  var record = Object.assign({}, row.attributes, { id: row.id });
  const relationships = row.relationships;

  if (relationships) {
    Object.keys(relationships).forEach(relation => (record[relation] = relationships[relation].data));
  }

  if (!state[row.type] || !_.isEqual(state[row.type][row.id], record)) {
    imm.set([row.type, row.id], record);
  }
}

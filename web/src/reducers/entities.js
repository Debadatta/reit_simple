import _ from 'lodash';
import immutable from 'object-path-immutable';
import { TAG_DELETE_REQUEST_SUCCESS } from '../constants/actionTypes';

const defaultEntities = {
  initSettings: {},
  candidacies: {},
  candidacyNotes: {},
  closingReasons: {},
  companies: {},
  companyAddresses: {},
  companyContactInfo: {},
  companyEmailAddresses: {},
  companyNotes: {},
  companyPhoneNumbers: {},
  companyRelationships: {},
  companyRelationshipTypes: {},
  companyTags: {},
  companyWebSites: {},
  compensation: {},
  coreLocationTypes: {},
  countries: {},
  currencies: {},
  deals: {},
  dealDetails: {},
  dealNotes: {},
  dealStatusChangedEvents: {},
  dealTags: {},
  education: {},
  employeeRanges: {},
  firms: {},
  firmFeatures: {},
  firmFields: {},
  fundingStages: {},
  globalRegions: {},
  importConnections: {},
  instantMessageAccountTypes: {},
  investors: {},
  notes: {},
  noteCategories: {},
  people: {},
  peopleAutocomplete: {},
  personAddresses: {},
  personAttachments: {},
  personContactInfo: {},
  personCustomFields: {},
  personEmailAddresses: {},
  personImAccounts: {},
  personLinkedinUrls: {},
  personNotes: {},
  personPhoneNumbers: {},
  personRelationships: {},
  personRelationshipTypes: {},
  personTags: {},
  personWebSites: {},
  positions: {},
  projects: {},
  projectAutocomplete: {},
  projectClients: {},
  projectDisplays: {},
  projectFees: {},
  projectIndustries: {},
  projectInvestors: {},
  projectMetadata: {},
  projectNotes: {},
  projectPositions: {},
  projectSpecialties: {},
  projectStrategies: {},
  projectSummary: {},
  projectTags: {},
  projectUsers: {},
  regions: {},
  revenueRanges: {},
  seniorities: {},
  specialties: {},
  statuses: {},
  tags: {},
  tasks: {},
  taskCategories: {},
  users: {},
};

export default function entities(state = defaultEntities, action) {
  if (!action.error && action.payload) {
    const imm = immutable(state);

    if (action.payload.data) {
      let rows = action.payload.data;

      if (action.type === TAG_DELETE_REQUEST_SUCCESS) {
        imm.del([rows.type, rows.id]);
        return imm.value();
      }

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

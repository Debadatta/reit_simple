import ajax from './ajax';

export function regions() {
  return ajax(`/regions`);
}

export function seniorities() {
  return ajax(`/seniorities`);
}

export function fundingStages() {
  return ajax(`/funding_stages`);
}

export function revenueRanges() {
  return ajax(`/revenue_ranges`);
}

export function employeeRanges() {
  return ajax(`/employee_ranges`);
}

export function industries() {
  return ajax(`/industries`);
}

export function globalRegions() {
  return ajax(`/global_regions`);
}

export function specialities() {
  return ajax(`/specialities`);
}

export function projectTypes() {
  return ajax(`/project_types`);
}

export function currencies() {
  return ajax(`/currencies`);
}

export function personRelationshipTypes() {
  return ajax(`/person_relationship_types`);
}

export function requestFirmStatuses() {
  return ajax(`/firm_statuses`);
}

export function companyRelationshipTypes() {
  return ajax(`/company_relationship_types`);
}

export function requestProjectStatusList() {
  return ajax(`/projects/statuses`);
}

export function locationTypes() {
  return ajax(`/location_types`);
}

export function instantMessageAccountTypes() {
  return ajax(`/instant_message_account_types`);
}

export function firmFields() {
  return ajax(`/firm_fields`);
}

export function countries() {
  return ajax(`/countries`);
}

export function requestTaskCategoryList() {
  return ajax('/task_categories');
}

export function requestNoteCategory() {
  return ajax(`/note_categories`);
}

export function requestDealStateList() {
  return ajax(`/deals/states`);
}

export function requestDealStatusList() {
  return ajax(`/deals/statuses`);
}

export function requestInvestors() {
  return ajax(`/investors`);
}

export function requestTimeZones() {
  return ajax('/time_zones');
}

export function requestProjectClosingReasons() {
  return ajax('/closing_reasons');
}

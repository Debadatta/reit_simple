import { createSelector } from 'reselect';

const firmStatusEntities = state => state.entities.statuses;
const firmStatusIds = state => state.statics.firmStatusIds;

export const firmStatuses = createSelector([firmStatusEntities, firmStatusIds], (entities, ids) =>
  ids.map(id => entities[id])
);

export const firmStatusLabelValue = createSelector(firmStatuses, recs => recs.map(i => ({ value: i.id, label: i.name })));

const regionEntities = state => state.entities.regions;
const regionIds = state => state.statics.regionIds;

export const regions = createSelector([regionEntities, regionIds], (entities, ids) => ids.map(id => entities[id]));

export const regionsLabelValue = createSelector(regions, recs => recs.map(i => ({ value: i.id, label: i.name })));

const countryEntities = state => state.entities.countries;
const countryIds = state => state.statics.countryIds;
const preferredCountryIds = state => state.statics.preferredCountryIds;

export const countries = createSelector([countryEntities, countryIds], (entities, ids) => ids.map(id => entities[id]));

export const preferredCountries = createSelector([countryEntities, preferredCountryIds], (entities, ids) =>
  ids.map(id => entities[id])
);

const investorEntities = state => state.entities.investors;
const investorIds = state => state.statics.investorIds;

export const investors = createSelector([investorEntities, investorIds], (entities, ids) =>
  ids.map(id => entities[id])
);

export const investorsLabelValue = createSelector(investors, recs => recs.map(i => ({ value: i.id, label: i.name })));

const industryEntities = state => state.entities.industries;
const industryIds = state => state.statics.industryIds;

export const industries = createSelector([industryEntities, industryIds], (entities, ids) =>
  ids.map(id => entities[id])
);

export const industriesLabelValue = createSelector(industries, recs => recs.map(i => ({ value: i.id, label: i.name })));

const seniorityEntities = state => state.entities.seniorities;
const seniorityIds = state => state.statics.seniorityIds;

export const seniorities = createSelector([seniorityEntities, seniorityIds], (entities, ids) =>
  ids.map(id => entities[id])
);

export const senioritiesLabelValue = createSelector(seniorities, recs =>
  recs.map(i => ({ value: i.id, label: i.name }))
);

const employeeRangeEntities = state => state.entities.employeeRanges;
const employeeRangeIds = state => state.statics.employeeRangeIds;

export const employeeRanges = createSelector([employeeRangeEntities, employeeRangeIds], (entities, ids) =>
  ids.map(id => entities[id])
);

export const employeeRangesLabelValue = createSelector(employeeRanges, recs =>
  recs.map(i => ({ value: i.id, label: i.range }))
);

const revenueRangeEntities = state => state.entities.revenueRanges;
const revenueRangeIds = state => state.statics.revenueRangeIds;

export const revenueRanges = createSelector([revenueRangeEntities, revenueRangeIds], (entities, ids) =>
  ids.map(id => entities[id])
);

export const revenueRangesLabelValue = createSelector(revenueRanges, recs =>
  recs.map(i => ({ value: i.id, label: i.range }))
);

const fundingStageEntities = state => state.entities.fundingStages;
const fundingStageIds = state => state.statics.fundingStageIds;

export const fundingStages = createSelector([fundingStageEntities, fundingStageIds], (entities, ids) =>
  ids.map(id => entities[id])
);

export const fundingStagesLabelValue = createSelector(fundingStages, recs =>
  recs.map(i => ({ value: i.id, label: i.name }))
);

const projectTypeEntities = state => state.entities.projectTypes;
const projectTypeIds = state => state.statics.projectTypeIds;

export const projectTypes = createSelector([projectTypeEntities, projectTypeIds], (entities, ids) =>
  ids.map(id => entities[id])
);

export const projectTypesLabelValue = createSelector(projectTypes, recs =>
  recs.map(i => ({ value: i.id, label: i.nameInTitlecase }))
);

const specialtyEntities = state => state.entities.specialties;
const specialtyIds = state => state.statics.specialtyIds;

export const specialties = createSelector([specialtyEntities, specialtyIds], (entities, ids) =>
  ids.map(id => entities[id])
);

export const specialtiesLabelValue = createSelector(specialties, recs =>
  recs.map(i => ({ value: i.id, label: i.name }))
);

const globalRegionEntities = state => state.entities.globalRegions;
const globalRegionIds = state => state.statics.globalRegionIds;

export const globalRegions = createSelector([globalRegionEntities, globalRegionIds], (entities, ids) =>
  ids.map(id => entities[id])
);

export const globalRegionsLabelValue = createSelector(globalRegions, recs =>
  recs.map(i => ({ value: i.id, label: i.name }))
);

const currencyEntities = state => state.entities.currencies;
const currencyIds = state => state.statics.currencyIds;

export const currencies = createSelector([currencyEntities, currencyIds], (entities, ids) =>
  ids.map(id => entities[id])
);

export const currenciesLabelValue = createSelector(currencies, recs =>
  recs.map(i => ({ value: i.id, label: i.name }))
);

import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromInsurances from '../reducers/insurances.reducer';


// The below given selectors provide us with slices of the state tree
// It is better to compose and receive a fraction of the state
export const getInsuranceState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.insurances
);

export const getInsuranceEntities = createSelector(
  getInsuranceState,
  fromInsurances.getInsuranceEntities
);

// This data structure improves the look up time as it is
// dictionary based
export const getAllInsurances = createSelector(getInsuranceEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});




export const getInsurancesLoaded = createSelector(
  getInsuranceState,
  fromInsurances.getInsurancesLoaded
);
export const getInsurancesLoading = createSelector(
  getInsuranceState,
  fromInsurances.getInsurancesLoading
);

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromInsurances from './insurances.reducer';


export interface ProductsState {
  insurances: fromInsurances.InsuranceState;

}

export const reducers: ActionReducerMap<ProductsState> = {
  insurances: fromInsurances.reducer,

};

export const getProductsState = createFeatureSelector<ProductsState>(
   'products'
);

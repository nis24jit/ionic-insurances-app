import { Action } from '@ngrx/store';

import { Insurance } from '../../models/insurance.model';

// load insurances
export const LOAD_INSURANCES = '[Products] Load Insurances';
export const LOAD_INSURANCES_FAIL = '[Products] Load Insurances Fail';
export const LOAD_INSURANCES_SUCCESS = '[Products] Load Insurances Success';
export const LOAD_UPDATED_ = '[Products] Load Insurances Success';

export class LoadInsurances implements Action {
  readonly type = LOAD_INSURANCES;
}

export class LoadInsurancesFail implements Action {
  readonly type = LOAD_INSURANCES_FAIL;
  constructor(public payload: any) {}
}

export class LoadInsurancesSuccess implements Action {
  readonly type = LOAD_INSURANCES_SUCCESS;
  constructor(public payload: Insurance[]) {}
}


// update insurance
export const UPDATE_INSURANCE = '[Products] Update Insurance';
export const UPDATE_INSURANCE_FAIL = '[Products] Update Insurance Fail';
export const UPDATE_INSURANCE_SUCCESS = '[Products] Update Insurance Success';

export class UpdateInsurance implements Action {
  readonly type = UPDATE_INSURANCE;
  constructor(public payload: Insurance) {}
}

export class UpdateInsuranceFail implements Action {
  readonly type = UPDATE_INSURANCE_FAIL;
  constructor(public payload: any) {}
}

export class UpdateInsuranceSuccess implements Action {
  readonly type = UPDATE_INSURANCE_SUCCESS;
  constructor(public payload: Insurance) {}
}

// remove insurance
export const REMOVE_INSURANCE = '[Products] Remove Insurance';
export const REMOVE_INSURANCE_FAIL = '[Products] Remove Insurance Fail';
export const REMOVE_INSURANCE_SUCCESS = '[Products] Remove Insurance Success';

export class RemoveInsurance implements Action {
  readonly type = REMOVE_INSURANCE;
  constructor(public payload: Insurance) {}
}

export class RemoveInsuranceFail implements Action {
  readonly type = REMOVE_INSURANCE_FAIL;
  constructor(public payload: any) {}
}

export class RemoveInsuranceSuccess implements Action {
  readonly type = REMOVE_INSURANCE_SUCCESS;
  constructor(public payload: Insurance) {}
}

// action types
export type InsurancesAction =
  | LoadInsurances
  | LoadInsurancesFail
  | LoadInsurancesSuccess
  | UpdateInsurance
  | UpdateInsuranceFail
  | UpdateInsuranceSuccess
  | RemoveInsurance
  | RemoveInsuranceFail
  | RemoveInsuranceSuccess;

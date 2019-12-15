import * as fromInsurances from '../actions/insurances.action';
import { Insurance } from '../../models/insurance.model';

export interface InsuranceState {
  entities: { [id: number]: Insurance };
  loaded: boolean;
  loading: boolean;
}

export const initialState: InsuranceState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromInsurances.InsurancesAction
): InsuranceState {
  switch (action.type) {
    case fromInsurances.LOAD_INSURANCES: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromInsurances.LOAD_INSURANCES_SUCCESS: {
      const insurances = action.payload;

      const entities = insurances.reduce(
        (entityObj: { [id: number]: Insurance }, insurance: Insurance) => {
          return {
            ...entityObj,
            [insurance.id]: insurance,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case fromInsurances.LOAD_INSURANCES_SUCCESS: {
      const insurances = action.payload;

      const entities = insurances.reduce(
        (entityObj: { [id: number]: Insurance }, insurance: Insurance) => {
          return {
            ...entityObj,
            [insurance.id]: insurance,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case fromInsurances.LOAD_INSURANCES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }


    case fromInsurances.UPDATE_INSURANCE_SUCCESS: {
      const insurance = action.payload;
      const entities = {
        ...state.entities,
        [insurance.id]: insurance,
      };

      return {
        ...state,
        entities,
      };
    }

    case fromInsurances.UPDATE_INSURANCE: {
      const insurance = action.payload;
      const entities = {
        ...state.entities,
        [insurance.id]: insurance,
      };

      return {
        ...state,
        entities,
      };
    }

    case fromInsurances.REMOVE_INSURANCE_SUCCESS: {
      const insurance = action.payload;
      const { [insurance.id]: removed, ...entities } = state.entities;

      return {
        ...state,
        entities,
      };
    }
  }

  return state;
}

export const getInsuranceEntities = (state: InsuranceState) => state.entities;
export const getInsurancesLoading = (state: InsuranceState) => state.loading;
export const getInsurancesLoaded = (state: InsuranceState) => state.loaded;

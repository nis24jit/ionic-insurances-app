import * as fromInsurances from './insurances.reducer';
import * as fromActions from '../actions/insurances.action';
import { Insurance } from '../../models/insurance.model';

describe('InsurancesReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromInsurances;
      const action = {} as any;
      const state = fromInsurances.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LOAD_INSURANCES action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromInsurances;
      const action = new fromActions.LoadInsurances();
      const state = fromInsurances.reducer(initialState, action);

      expect(state.loading).toEqual(true);
      expect(state.loaded).toEqual(false);
      expect(state.entities).toEqual({});
    });
  });






});


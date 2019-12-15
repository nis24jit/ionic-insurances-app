import * as fromInsurances from './insurances.action';

describe('Insurance Actions', () => {
  describe('LoadInsurance Actions', () => {
    describe('LoadInsurances', () => {
      it('should create an action', () => {
        const action = new fromInsurances.LoadInsurances();

        expect({ ...action }).toEqual({
          type: fromInsurances.LOAD_INSURANCES,
        });
      });
    });

    describe('LoadInsurancesFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromInsurances.LoadInsurancesFail(payload);

        expect({ ...action }).toEqual({
          type: fromInsurances.LOAD_INSURANCES_FAIL,
          payload,
        });
      });
    });

  });
});

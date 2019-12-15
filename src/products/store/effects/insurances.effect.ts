import {Injectable} from '@angular/core';

import {Effect, Actions, ofType} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import {map, switchMap, catchError} from 'rxjs/operators';

import * as insuranceActions from '../actions/insurances.action';
import * as fromServices from '../../services';

// We use effects so that everything is observable driven
// and is modified with a pure function

@Injectable()
export class InsurancesEffects {
  constructor(
    private actions$: Actions,
    private insurancesService: fromServices.InsurancesService
  ) {
  }

  @Effect()
  loadInsurances$ = this.actions$.pipe(ofType(insuranceActions.LOAD_INSURANCES)).pipe(
    switchMap(() => {
      return this.insurancesService
        .getInsurances()
        .pipe(
          map(insurances => new insuranceActions.LoadInsurancesSuccess(insurances)),
          catchError(error => of(new insuranceActions.LoadInsurancesFail(error)))
        );
    })
  );

  @Effect()
  updateInsurance$ = this.actions$.pipe(ofType(insuranceActions.UPDATE_INSURANCE)).pipe(
    map((action: insuranceActions.UpdateInsurance) => action.payload),
    switchMap(insurance => {
      return of(insurance).pipe( map(insurance => new insuranceActions.UpdateInsuranceSuccess(insurance)));
    })
  );


  @Effect()
  removeInsurance$ = this.actions$.pipe(ofType(insuranceActions.REMOVE_INSURANCE)).pipe(
    map((action: insuranceActions.RemoveInsurance) => action.payload),
    switchMap(insurance => {
      return this.insurancesService
        .removeInsurance(insurance)
        .pipe(
          map(() => new insuranceActions.RemoveInsuranceSuccess(insurance)),
          catchError(error => of(new insuranceActions.RemoveInsuranceFail(error)))
        );
    })
  );
}

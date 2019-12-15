import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Insurance } from '../models/insurance.model';

// We use effects so that everything is observable driven,reduces side effects from components
// and is modified with a pure function
@Injectable()
export class InsurancesService {
  constructor(private http: HttpClient) {}

  getInsurances(): Observable<Insurance[]> {
    return this.http
      .get<Insurance[]>(`../../assets/data/data.json`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }


  updateInsurance(payload: Insurance): Observable<Insurance> {
    return this.http
      .put<Insurance>(`/api/insurances/${payload.id}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  removeInsurance(payload: Insurance): Observable<Insurance> {
    return this.http
      .delete<any>(`/api/insurances/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}

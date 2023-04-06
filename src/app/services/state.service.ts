import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State } from '../model/state.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class StateService extends BaseService<State> {
  constructor(protected override http: HttpClient) {
    super(http, 'states');
  }
}

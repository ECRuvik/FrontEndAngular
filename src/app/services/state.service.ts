import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State } from '../model/state.model';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private http:HttpClient) { }

  public getState(): Observable<State> {
    return this.http.get<State>(`${baseUrl}`+ 'states/watch');
  }
}

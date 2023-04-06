import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../model/data.model';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  public getData(): Observable<Data> {
    return this.http.get<Data>(`${baseUrl}`+ 'data/watch');
  }

}

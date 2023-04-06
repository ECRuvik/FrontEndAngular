import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Study } from '../model/study.model';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class StudyService {

  constructor(private http:HttpClient) { }

  public getStudies(): Observable<Study> {
    return this.http.get<Study>(`${baseUrl}`+ 'studies/watch');
  }
}

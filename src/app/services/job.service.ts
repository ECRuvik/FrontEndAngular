import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Job } from '../model/job.model';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }

  public getJobs(): Observable<Job> {
    return this.http.get<Job>(`${baseUrl}`+ 'jobs/watch');
  }
}

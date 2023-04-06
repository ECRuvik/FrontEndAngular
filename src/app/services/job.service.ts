import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BaseService } from './base.service';
import { Job } from '../model/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobService extends BaseService<Job> {
  constructor(protected override http: HttpClient) {
    super(http, 'jobs');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../model/data.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class DataService extends BaseService<Data> {
  constructor(protected override http: HttpClient) {
    super(http, 'data');
  }
}

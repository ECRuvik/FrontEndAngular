import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Locations } from '../model/locations.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class LocationsService extends BaseService<Locations> {
  constructor(protected override http: HttpClient) {
    super(http, 'locations');
  }
}

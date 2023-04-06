import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Locations } from '../model/locations.model';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http:HttpClient) { }

  public getLocations(): Observable<Locations> {
    return this.http.get<Locations>(`${baseUrl}`+ 'locations/watch');
  }

}

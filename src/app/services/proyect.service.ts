import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyect } from '../model/proyect.model';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {

  constructor(private http:HttpClient) { }

  public getProyects(): Observable<Proyect> {
    return this.http.get<Proyect>(`${baseUrl}`+ 'proyects/watch');
  }
}

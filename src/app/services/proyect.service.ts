import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyect } from '../model/proyect.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ProyectService extends BaseService<Proyect> {
  constructor(protected override http: HttpClient) {
    super(http, 'proyects');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http:HttpClient) { }

  public getSkills(): Observable<Skill> {
    return this.http.get<Skill>(`${baseUrl}`+ 'skills/watch');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class SkillService extends BaseService<Skill> {
  constructor(protected override http: HttpClient) {
    super(http, 'skills');
  }
}

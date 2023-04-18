import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {
  constructor(protected override http: HttpClient) {
    super(http, 'users');
  }
}

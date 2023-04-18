import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseService<T> {
  protected baseUrl = 'http://localhost:8080/';
  constructor(protected http: HttpClient, protected url: string) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl + this.url + '/watch');
  }

  getById(id: number): Observable<T> {
    return this.http.get<T>(this.baseUrl + this.url + '/id/' + id);
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(this.baseUrl + this.url + '/add', item);
  }

  update(id: number, item: T): Observable<T> {
    return this.http.put<T>(this.baseUrl + this.url + '/edit/' + id, item);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + this.url + '/delete/' + id);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GithubData} from './models';

@Injectable({
  providedIn: 'root'
})

export class GithubService {

  BASE_URL = `https://api.github.com/users/`;

  constructor(public http: HttpClient) { }

// tslint:disable-next-line:typedef
// @ts-ignore
  search(): Observable<HttpClient.response>{
  // @ts-ignore
    // tslint:disable-next-line:label-position
    return this.http.get(`${this.BASE_URL}` + this.username);
 }
}

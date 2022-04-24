import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
    baseURL: string = "https://resources.ncehr.org/wp-json/wp/v2/posts";

  constructor(private http: HttpClient) { }


  getBlog(): Observable<any> {
      return this.http.get(this.baseURL);
  }
}

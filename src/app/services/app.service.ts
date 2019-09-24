import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
url;
  constructor(private http: HttpClient) {
    this.url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDjKvFYdfJEz8Xtq9cU_IafHUCWtJ7C5Xg';
  }

  getAPIData(): Observable<any> {
    return this.http.get(this.url);
  }
}

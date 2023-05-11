import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const host = 'http://localhost:3000/user/login';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  constructor(private httpClient: HttpClient) {}

  login(name: string, password: string): Observable<any> {
    let x = this.httpClient
      .post<any>(host, { email: name, password: password })
      .subscribe((x) => {
        console.log(x);
      });
    return this.httpClient.post<any>(host, { name, password });
  }
}

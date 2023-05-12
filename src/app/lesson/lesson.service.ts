import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

const host = 'http://localhost:3000/course';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  constructor(private httpClient: HttpClient) {}

  score = 0;
  length = 0;

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(host);
  }
}

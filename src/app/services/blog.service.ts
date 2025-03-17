import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = 'https://dev.to/api/articles';

  constructor(private http: HttpClient) {}

  getBlogPosts(page: number = 1, perPage: number = 10): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?page=${page}&per_page=${perPage}`)
  }
}

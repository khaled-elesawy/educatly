import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = 'https://dev.to/api/articles';

  constructor(private http: HttpClient) {}

  getBlogPosts(page: number = 1, perPage: number = 10): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?page=${page}&per_page=${perPage}`).pipe(
      catchError((error) => {
        console.error('Error fetching blog posts', error);
        return throwError(() => new Error('Failed to fetch blog posts'));
      })
    );
  }
}

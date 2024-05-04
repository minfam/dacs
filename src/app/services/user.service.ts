import { Injectable } from '@angular/core';
// import { environment } from '../../environments/environment';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Observable, catchError, throwError } from 'rxjs';
// import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private uri = environment.url + 'user';
  // constructor(private http: HttpClient) {}
  // get(id: number): Observable<IUser[]> {
  //   return this.http
  //     .get<IUser[]>(`${this.uri}/load/${id}`)
  //     .pipe(catchError(this.handleError));
  // }
  // search(params: IUser): Observable<IUser[]> {
  //   return this.http
  //     .post<IUser[]>(`${this.uri}/search`, params)
  //     .pipe(catchError(this.handleError));
  // }
  // add(params: IUser): Observable<IUser> {
  //   return this.http
  //     .post<IUser>(`${this.uri}/add`, params)
  //     .pipe(catchError(this.handleError));
  // }
  // update(hero: IUser): Observable<IUser> {
  //   return this.http
  //     .put<IUser>(`${this.uri}/update`, hero)
  //     .pipe(catchError(this.handleError));
  // }
  // delete(id: number): Observable<unknown> {
  //   return this.http
  //     .delete(`${this.uri}/delete/${id}`)
  //     .pipe(catchError(this.handleError));
  // }
  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `,
  //       error.error
  //     );
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(
  //     () => new Error('Something bad happened; please try again later.')
  //   );
  // }
}

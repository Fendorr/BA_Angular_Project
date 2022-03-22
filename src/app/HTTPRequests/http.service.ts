import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';

export interface Data {
  id: number;
  name: string;
  age: number;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = "assets/dummyData.json";

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<Data>(this.url)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
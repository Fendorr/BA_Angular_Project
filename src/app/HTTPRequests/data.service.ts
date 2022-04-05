import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

export interface Data {
  id: number;
  name: string;
  age: number;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "assets/dummyData.json";

  constructor(private http: HttpClient) { }

  getData(){
    //returns an observable
    return this.http.get<Data[]>(this.url);
  }

  getDataResponse(): Observable<HttpResponse<Data>> {
    return this.http.get<Data>(this.url, { observe: 'response' });
  }

  makeIntentionalError() {
    return this.http.get('not/a/real/url')
      .pipe(catchError(this.handleError));
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
    return throwError(() => new Error("We tried to access /not/a/real/url which doesn`t exist, therefore the error is thrown. "
                                    + "Check the console for more information."));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

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

  makeIntentionalError() {
    return this.http.get('not/a/real/url')
      .pipe(catchError(this.handleError));
  }

  private handleError() {
    return throwError(
      () => new Error(
        "We tried to access /not/a/real/url which doesn`t exist, "
        + "therefore the error is thrown. "
        + "Check the console for more information."
      )
    );
  }
}

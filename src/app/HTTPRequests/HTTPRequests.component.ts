import { Component, OnInit } from '@angular/core';
import { Data, DataService } from './data.service';

@Component({
  selector: 'app-HTTPRequests',
  templateUrl: './HTTPRequests.component.html',
  styleUrls: ['./HTTPRequests.component.css']
})
export class HTTPRequestsComponent {
  data: Data[] = [];
  headers: string[] = [];
  error: any;

  constructor(private dataService: DataService) { }

  clear() {
    this.data = [];
    this.error = undefined;
    this.headers = [];
  }

  showData() {
    this.dataService.getData().subscribe(
      data => (this.data = data)
    )
  }

  showDataResponse() {
    this.dataService.getDataResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
      });
  }

  makeError() {
    this.dataService.makeIntentionalError().subscribe({ error: error => this.error = error.message });
  }
}

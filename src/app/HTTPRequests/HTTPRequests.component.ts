import { Component, OnInit } from '@angular/core';
import { Data, DataService } from './data.service';

@Component({
  selector: 'app-HTTPRequests',
  templateUrl: './HTTPRequests.component.html',
  styleUrls: ['./HTTPRequests.component.css']
})
export class HTTPRequestsComponent {
  data: Data[] = [];
  error: any;

  constructor(private dataService: DataService) { }

  clear() {
    this.data = [];
    this.error = undefined;
  }

  showData() {
    this.dataService.getData().subscribe(
      data => (this.data = data)
    )
  }

  makeError() {
    this.dataService.makeIntentionalError().subscribe({ error: error => this.error = error.message });
  }
}

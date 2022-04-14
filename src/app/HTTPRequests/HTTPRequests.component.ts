import { Component } from '@angular/core';
import { Data, DataService } from './data.service';

@Component({
  selector: 'app-HTTPRequests',
  templateUrl: './HTTPRequests.component.html',
  styleUrls: ['./HTTPRequests.component.css']
})
export class HTTPRequestsComponent {
  data: Data[] = [];
  error: string = "";

  constructor(private dataService: DataService) { }

  showData() {
    this.clear();
    this.dataService.getData().subscribe(
      (result) => (
        this.data = result
      )
    )
  }

  makeError() {
    this.clear();
    this.dataService.makeIntentionalError().subscribe({ 
        error: error => (
          this.error = error.message 
        )
    });
  }

  private clear() {
    this.data = [];
    this.error = "";
  }
}

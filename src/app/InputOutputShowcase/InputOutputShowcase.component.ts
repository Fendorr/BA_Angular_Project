import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-InputOutputShowcase',
  templateUrl: './InputOutputShowcase.component.html',
  styleUrls: ['./InputOutputShowcase.component.css']
})
export class InputOutputShowcaseComponent implements OnInit {
  @Input() name: string = "";

  constructor() { }

  ngOnInit() {
  }

}

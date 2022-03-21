import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-example',
  template: `
  <p>The name is: {{name}}</p>
  <input [value]="name" (input)="handleChange($any($event.target).value)">
  `,
  styleUrls: ['./SeperateBindingExample.component.css']
})
export class SeperateBindingExampleComponent {

  name: string = "";

  handleChange(newName:string) {
    this.name = newName;
  }

  constructor() { }

  ngOnInit() {
  }

}

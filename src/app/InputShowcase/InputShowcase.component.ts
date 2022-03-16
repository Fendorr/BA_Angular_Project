import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-InputShowcase',
  template: `
  <p>
  The name (set by the parent) is: {{name}}
  </p>
  `,
  styleUrls: ['./InputShowcase.component.css']
})
export class InputOutputShowcaseComponent {
  @Input() name: string = "";
}

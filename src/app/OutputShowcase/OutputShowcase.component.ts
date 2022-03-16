import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-OutputShowcase',
  template: `
  <input [(ngModel)]="name" />
  <button (click)="newNameEvent.emit(name)">Send data to Parent</button>
  `,
  styleUrls: ['./OutputShowcase.component.css']
})
export class OutputShowcaseComponent {
  name: string = "";
  @Output() newNameEvent = new EventEmitter();

  handleNameChange(newName: string) {
    this.newNameEvent.emit(newName);
  }
}

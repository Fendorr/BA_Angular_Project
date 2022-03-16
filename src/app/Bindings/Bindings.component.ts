import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Bindings',
  templateUrl: './Bindings.component.html',
  styleUrls: ['./Bindings.component.css']
})
export class BindingsComponent implements OnInit {

  name:string="DEFAULTNAME";


  handleNameChange(newName: string) {
    this.name = newName;
  }

  constructor() { }

  ngOnInit() {
  }

}

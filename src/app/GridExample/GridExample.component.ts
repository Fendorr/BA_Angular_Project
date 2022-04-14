import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-GridExample',
  templateUrl: './GridExample.component.html',
  styleUrls: ['./GridExample.component.css']
})
export class GridExampleComponent implements OnInit {
  //#region imgs
  doggo1: string = "assets/img/doggo1.jpg"
  doggo2: string = "assets/img/doggo2.jpg"
  doggo3: string = "assets/img/doggo3.webp"
  doggo4: string = "assets/img/doggo4.jpg"
  doggo5: string = "assets/img/doggo5.jpeg"
  robbenbaby1: string = "assets/img/robbenbaby1.jpg"
  robbenbaby2: string = "assets/img/robbenbaby2.jpg"
  robbenbaby4: string = "assets/img/robbenbaby4.jpg"
  //#endregion
  
  text: string = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, \
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."


  constructor() {
  }

  ngOnInit() {

  }
}

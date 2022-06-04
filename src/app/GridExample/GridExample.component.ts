import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-GridExample',
  templateUrl: './GridExample.component.html',
  styleUrls: ['./GridExample.component.css']
})
export class GridExampleComponent implements OnInit {
  //#region imgs
  doggo1: string = "assets/img/doggo1.webp"
  doggo2: string = "assets/img/doggo2.webp"
  doggo3: string = "assets/img/doggo3.webp"
  doggo4: string = "assets/img/doggo4.webp"
  doggo5: string = "assets/img/doggo5.webp"
  robbenbaby1: string = "assets/img/robbenbaby1.webp"
  robbenbaby2: string = "assets/img/robbenbaby2.webp"
  robbenbaby4: string = "assets/img/robbenbaby4.webp"
  //#endregion
  
  text: string = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, \
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."


  constructor() {
  }

  ngOnInit() {

  }
}

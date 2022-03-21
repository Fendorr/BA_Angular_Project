import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Grid',
  templateUrl: './Grid.component.html',
  styleUrls: ['./Grid.component.css']
})
export class GridComponent implements OnInit {

  text:string = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, \
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."


  constructor() {
  }

  ngOnInit() {

  }
}

import { Component, OnInit } from '@angular/core';
import { navItems } from './navItems';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  items = navItems;

  constructor() { }

  ngOnInit() {

  }
  
}

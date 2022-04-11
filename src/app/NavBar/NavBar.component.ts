import { Component, OnInit } from '@angular/core';
import { navItems } from './navItems';

@Component({
  selector: 'app-navbar',
  templateUrl: './NavBar.component.html',
  styleUrls: ['./NavBar.component.css']
})
export class NavBarComponent implements OnInit {
  items = navItems;

  constructor() { }

  ngOnInit() {

  }
  
}

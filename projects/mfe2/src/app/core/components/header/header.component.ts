import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string = "Header";
  @Input() menuItems: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

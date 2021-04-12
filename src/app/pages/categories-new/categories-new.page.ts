import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-new',
  templateUrl: './categories-new.page.html',
  styleUrls: ['./categories-new.page.scss'],
})
export class CategoriesNewPage implements OnInit {
  colors = ['primary', 'secondary', 'tertiary', 'success',
    'warning', 'danger', 'light', 'dark', 'medium']

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  constructor(
    private router:Router,
    private activeRouter:ActivatedRoute
  ) {}

  ngOnInit(): void {
    
  }

  newTransaction(){
    this.router.navigateByUrl("categories/new")
  }
}

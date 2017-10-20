import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-comp',
  template: `
    <p>
      about works!
    </p>
    <a routerLink="/help">Help</a>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

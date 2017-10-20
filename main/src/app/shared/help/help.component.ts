import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'help-comp',
  template: `
    <p>
      help works!
    </p>
    <a routerLink="/about">About</a>
  `,
  styles: []
})
export class HelpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

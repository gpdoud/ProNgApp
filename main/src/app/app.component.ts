import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>
      app Works!
    </p>
    <about-comp></about-comp>
    <help-comp></help-comp>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}

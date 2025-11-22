import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-link',
  template: `
    <p>
      <a [href]="link" target="_blank"><i class="fab fa-github"></i> View the source on GitHub</a>
    </p>
  `,
  styles: `
    .fab {
      color: black;
    }
    p {
      margin-top: 0;
    }
    a {
      display: inline-block;
      padding: 8px;
      background: #e2ecfa;
      text-decoration: none;
    }
  `,
})
export class ExampleLinkComponent {
  @Input() path = '';
  get link() {
    return 'https://github.com/ng-dnd/ng-dnd/tree/main/packages/examples/src/app/' + this.path;
  }
}

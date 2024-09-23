import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HotkeyModule } from 'angular2-hotkeys';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [HotkeyModule, RouterLinkActive, RouterLink, RouterOutlet],
})
export class AppComponent {
  open = environment.production;
  toggle(e: Event) {
    e.preventDefault();
    this.open = !this.open;
  }
}

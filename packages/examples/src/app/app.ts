import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HotkeyModule } from 'angular2-hotkeys';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [HotkeyModule, RouterLinkActive, RouterLink, RouterOutlet],
})
export class App {
  open = environment.production;
  toggle(e: Event) {
    e.preventDefault();
    this.open = !this.open;
  }
}

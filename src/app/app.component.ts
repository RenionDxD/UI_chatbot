import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui_chat';

  constructor(private router: Router) { }

  redirectToChat() {
    this.router.navigate(['/chat']);
  }
}

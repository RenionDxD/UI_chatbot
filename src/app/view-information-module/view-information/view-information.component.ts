import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-information',
  templateUrl: './view-information.component.html',
  styleUrls: ['./view-information.component.scss']
})
export class ViewInformationComponent {


  constructor(private router: Router) { }

  redirectToChat() {
    this.router.navigate(['/chat']);
  }
  redirectToSave() {
    this.router.navigate(['/files']);
  }
  redirectToMake() {
    this.router.navigate(['/generate_model']);
  }

}

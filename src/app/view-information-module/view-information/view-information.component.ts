import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceInfoService } from '../service-information/service-info.service'
@Component({
  selector: 'app-view-information',
  templateUrl: './view-information.component.html',
  styleUrls: ['./view-information.component.scss']
})
export class ViewInformationComponent {

  serverStatus: boolean = false;
  constructor(private router: Router, private ServiceInfoService: ServiceInfoService) { }

  ngOnInit() {
    this.ServiceInfoService.checkServerStatus().subscribe(
      (response: any) => {
        this.serverStatus = response.status === 'online';
        // Resto del código según tus necesidades
      },
      error => {
        console.error('Error al obtener el estado del servidor:', error);
        // Manejo de error según tus necesidades
      }
    );
  }



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

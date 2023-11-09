import { Component } from '@angular/core';
import { GenerateServiceService } from '../generate-model-service/generate-service.service'

@Component({
  selector: 'app-generate-model',
  templateUrl: './generate-model.component.html',
  styleUrls: ['./generate-model.component.scss']
})
export class GenerateModelComponent {
  progress = 0;
  response = '';
  constructor(private generateService: GenerateServiceService) { }
  generarModelo(){

    this.generateService.postWithoutData().subscribe(
      response => {

        this.progress = 0;
        const interval = setInterval(() => {
          this.progress += 10;
          if (this.progress >= 100) {
            clearInterval(interval);
            this.response = response;
          }
        }, 800);

      },
      error => {
        alert(error);
        // Realiza el manejo de errores
      }
    )
  }


  
}

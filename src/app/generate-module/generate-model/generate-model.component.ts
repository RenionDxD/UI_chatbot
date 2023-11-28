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
            }}, 800);
      },
      error => {
        alert(error);
        // Realiza el manejo de errores
      }
    )
  }


  isSwitchDisabled: boolean = false;
  ngOnInit() {
    // Inicializamos el switch como habilitado
    this.isSwitchDisabled = false;
    
  }

  onToggle(event: any) {

    if (!this.isSwitchDisabled) {
      // Aquí puedes manejar la lógica cuando se cambia el switch
      // ...

      // Deshabilitamos el switch durante 30 segundos
      this.isSwitchDisabled = true;

      // Habilitamos el switch después de 30 segundos
      setTimeout(() => {
        this.isSwitchDisabled = false;
      }, 3000);
    }

    const value = event.target.checked;
    this.generateService.postChangeHistory(value).subscribe(
      response => {
        console.log("Estado del interrptor correcto")
      },
      error => {
        alert('Error al enviar el estado del interruptor:');
      }
    );
  }







  
}

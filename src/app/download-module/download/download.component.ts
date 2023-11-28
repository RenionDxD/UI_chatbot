import { Component } from '@angular/core';
import { DownloadServiceService } from '../service-download/download-service.service'
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent {


  response = '';
  constructor(private DownloadServiceService: DownloadServiceService){}

  pullFiles(numero: number){

    this.DownloadServiceService.downloadFiles(numero).subscribe(
      (response: Blob) => {
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        // Crear un enlace <a> y simular un clic para iniciar la descarga
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        if (numero == 1){
          link.download = 'Archivo de datos.xlsx';
        }else{
          link.download = 'Preguntas nuevas.xlsx';
        }
        link.click();
      },
      error => {
        alert("Por el momento no hay ningun archivo");
      }
    );
  } 


}

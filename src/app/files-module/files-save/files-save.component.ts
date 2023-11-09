import { Component } from '@angular/core';
import { FileUploadService } from '../files-service/file-upload.service';


@Component({
  selector: 'app-files-save',
  templateUrl: './files-save.component.html',
  styleUrls: ['./files-save.component.scss']
})
export class FilesSaveComponent {


  archivos: { [key: string]: File } = {};
  response = '';
  constructor(private flieservice: FileUploadService) { }

  onFileSelected(event: Event, tipo: string): void {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      this.archivos[tipo] = target.files[0];
    }
  }

  sendFiles(){

      this.flieservice.uploadFiles(this.archivos['archivo'], this.archivos['txt']).subscribe(
        response => {
          this.response = response;
          // Realiza el manejo de la respuesta de la API
        },
        error => {
          alert(error);
          // Realiza el manejo de errores
        }
      );
    } 
  }
  



import { Component } from '@angular/core';
import { ChatServiceService } from '../service-chat/chat-service.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {


  mensaje: string = '';
  mensajes: { texto: string, tipo: string }[] = [];

  constructor(private chatService: ChatServiceService) {}

  
  loading: boolean = false; 
  
  enviarMensaje() {
    this.loading = true;
    this.chatService.enviarMensaje(this.mensaje).subscribe(
      (respuesta) => {
        this.mensajes.push({ texto: this.mensaje, tipo: 'enviado' });
        this.mensajes.push({ texto: respuesta.solucion, tipo: 'recibido' });
        this.mensaje = '';
        this.loading = false;// Realiza acciones adicionales si es necesario
      },
      (error) => {
        this.loading = false;
        console.error('Error al enviar mensaje', error);
      }
    );
    
  }




  
}

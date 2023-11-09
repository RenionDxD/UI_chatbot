import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerateServiceService {

  private apiUrl = 'http://127.0.0.1:5051/chatbot/modelar'; 


  constructor(private http: HttpClient) { }

  postWithoutData(): Observable<any> {
    // No se envía ningún dato en el cuerpo de la solicitud POST
    return this.http.post(this.apiUrl, {});
  }
}

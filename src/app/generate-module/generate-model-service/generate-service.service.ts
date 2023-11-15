import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerateServiceService {

  private apiUrl = 'http://127.0.0.1:5051/chatbot/modelar'; 
  private apiUrl2 = 'http://127.0.0.1:5051/chatbot/historial'; 


  constructor(private http: HttpClient) { }

  postChangeHistory(value: any): Observable<any> {
    const body = { "boolean": value };
    return this.http.post(this.apiUrl2,  body );
  }

  postWithoutData(): Observable<any> {
    // No se envía ningún dato en el cuerpo de la solicitud POST
    return this.http.post(this.apiUrl, {});
  }
}

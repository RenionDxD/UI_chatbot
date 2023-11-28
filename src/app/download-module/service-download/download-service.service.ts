import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadServiceService {

  private apiUrl = 'http://127.0.0.1:5051/chatbot/download'; 


  constructor(private http: HttpClient) { }


  downloadFiles(numero: number): Observable<Blob>{
    return this.http.post(this.apiUrl, {"Nofile":numero}, { responseType: 'blob' });
  }
}

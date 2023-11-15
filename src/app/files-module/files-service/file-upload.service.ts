import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private apiUrl = 'http://127.0.0.1:5051/chatbot/post_data'; 


  constructor(private http: HttpClient) { }

  uploadFiles(archivo: File, txt: File, key: File): Observable<any> {
    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('txt', txt);
    formData.append('key', key);

    return this.http.post(this.apiUrl, formData);
  }

}

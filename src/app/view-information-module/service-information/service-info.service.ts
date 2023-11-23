import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceInfoService {

  private apiUrl2 = 'http://127.0.0.1:5051/chatbot/Online';
  constructor(private http: HttpClient) { }


  checkServerStatus() {
    return this.http.get(this.apiUrl2);
  }
}

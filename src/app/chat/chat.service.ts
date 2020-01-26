import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  private baseURL: string = "https://api.dialogflow.com/v1/query?v=d447a2ac";
  private token: string = "3f0e1011c80a45319bfd4df8d447a2ac";

  constructor(private http: Http){}

  public getResponse(query: string){
    let data = {
      query : query,
      lang: 'en',
      sessionId: '1234567'
    }
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token}`);

    return this.http
      .post(`${this.baseURL}`, data, {headers: headers})
      .map(res => {
        return res.json()
      })
  }

}

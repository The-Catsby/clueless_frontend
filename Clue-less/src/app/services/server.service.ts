import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ServerService {
  private url:string = "";
  constructor(private http: HttpClient) {

  }

  getMessages(server: any[]) {
    //return this.http.get();

  }

  sendMessage(message: any) {
    console.log("sendMessage"+message); 
    let ob =  this.http.get("http://127.0.0.1:8000/users/1/?format=json")
    return ob;

    //post is not support at this time
  }
}

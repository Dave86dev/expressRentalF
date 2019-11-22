import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url='http://localhost:3000/films/';
  

  constructor(private httpClient:HttpClient) { }

  sendCertainUser(login_b:any):Observable<any>{
    console.log("ye aqui seguimos eh");
    
    return this.httpClient.post(`http://localhost:3000/user/showme`, login_b);
  }


}

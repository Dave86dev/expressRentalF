import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url='http://localhost:3000/films/';

  isLoginReg : boolean = true;
  isProfOut: boolean = false;
  nameP: string = '';

  constructor(private httpClient:HttpClient) { }

  sendCertainUser(login_b:any):Observable<any>{
    
    
    return this.httpClient.post(`http://localhost:3000/user/showme`, login_b); //{responseType: 'text'}) esto en caso de que 
  }                                                                            //los res send devuelvan texto y no json

  loginUser(login_b:any):Observable<any>{
    
    return this.httpClient.post(`http://localhost:3000/user/login`, login_b); 

  }
  
  logoutUser():Observable<any>{
    
    let tokenLog = JSON.parse(localStorage.getItem("datosLogin"));
    this.isProfOut = false;
    
    this.httpClient.get(`http://localhost:3000/user/logout/` + tokenLog.token).subscribe();

    localStorage.removeItem("datosLogin");

    return;
  }

  regUser(regis_d:any):Observable<any>{
    
    return this.httpClient.post(`http://localhost:3000/user/register`, regis_d);
  }

  showCuser(user_p:any):Observable<any>{
    return this.httpClient.post(`http://localhost:3000/user/showme`, user_p);
  }

  loginDone(){

    if(localStorage.getItem('datosLogin')){
      return true;
    }
    return false;
  }

  showOrdersUser(user_mail:any):Observable<any>{
    
    return this.httpClient.get(`http://localhost:3000/order/show/` + user_mail);
    
  }

  updateUserdata(user_mod:any):Observable<any>{
    
    return this.httpClient.post(`http://localhost:3000/user/modify`, user_mod);
  }
}

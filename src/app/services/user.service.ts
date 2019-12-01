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
    
    //{responseType: 'text'}) for in case responses didn't deliver just json structures.
    return this.httpClient.post(`http://localhost:3000/user/showme`, login_b); 

  }                                                                            

  loginUser(login_b:any):Observable<any>{
    
    return this.httpClient.post(`http://localhost:3000/user/login`, login_b); 

  }

  loginAdmin(login_a:any):Observable<any>{
    
    return this.httpClient.post(`http://localhost:3000/order/show`, login_a);

  }
  
  logoutUser():Observable<any>{
    
    //we get the token from the localStorage
    let tokenLog = JSON.parse(localStorage.getItem("datosLogin"));
    //set the boolean isProfOut to false to restore the original header login options
    this.isProfOut = false;
    
    this.httpClient.get(`http://localhost:3000/user/logout/` + tokenLog.token).subscribe();
    
    //IMPORTANT. we clean the localStorage after log out is done.
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
    //function that checks if there is data on the localStorage.
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

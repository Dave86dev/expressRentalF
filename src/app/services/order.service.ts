import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient:HttpClient) { }

  newOrder(placeOrder:any):Observable<any>{
    return this.httpClient.post(`http://localhost:3000/order`, placeOrder);
  }
}

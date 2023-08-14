import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { response } from '../addOrder';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { 
    
  }

  addOrder (data: any ){
    return this.http.post<response>('http://localhost:5031/orderController/addOrderC', data);
    
  }
}



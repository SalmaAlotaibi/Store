import { Component } from '@angular/core';
import { addOrder } from '../_models/addOrder';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../_models/servise/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.html',
  styles: [
  ]
})
export class AddOrderComponent {
  order : addOrder | undefined;
  orderFormGroup : FormGroup = this._formBuilder.group ({
  
    ProductName :['', Validators.required],
    Price :[''],
    Quantity :['', Validators.required],

  });
  

  constructor (private _formBuilder :FormBuilder , private orderServ :  OrderService  ){
     
      
     
  }

   submit(){
    this.orderServ.addOrder(this.orderFormGroup.value).subscribe(r => console.log(r))
    console.log("test");
  }

}

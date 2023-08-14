import { Component, OnInit} from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cat.models'
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
 cart: Cart = { items: [{
  product: 'https://via.placeholder.com/150',
  name: 'nickers',
  price: 150,
  quantity: 1,
  id: 1,
 }]};
 dataSource: Array<CartItem>= [];
 displayedColumns: Array<String>= [
   'product',
  'name',
  'price',
  'quantity',
  'total',
  'action',
];
;
 
constructor(private cartService: CartService) {}
ngOnInit(): void {
this.cartService.cart.subscribe((_cart: Cart) => {
    this.cart = _cart;
    this.dataSource = _cart.items;
  });
}

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }
  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }
  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }



};

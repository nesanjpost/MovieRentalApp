import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/cartItem';
import { Movies } from '../shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getAll() {
    throw new Error('Method not implemented.');
  }

  private cart:Cart = new Cart();

  addToCart(movie:Movies):void{
    let cartItem = this.cart.items.find(item => item.movie.id === movie.id)
    if(cartItem ){
      this.changeQuantity(movie.id , cartItem.quantity +1)
      return;
    }
    this.cart.items.push(new CartItem(movie))
  }

  removeFromCart(movieId:number):void{
    this.cart.items = this.cart.items.filter(item => item.movie.id != movieId)
  }

  changeQuantity(quantity:number, movieId:number){
    let cartItem = this.cart.items.find(item => item.movie.id === movieId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}

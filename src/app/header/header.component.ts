import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { MovieService } from '../services/movie/movie.service';
import { Movies } from '../shared/models/movie';
import { CartItem } from '../shared/models/cartItem';
import { Cart } from '../shared/models/Cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart!: Cart;

  public totalItem : number = 0;

  constructor(private ms:MovieService, private cartService: CartService, router:ActivatedRoute ) {
    this.setCart();
   }

 

  ngOnInit(): void {
    // this.cartService.getAll().subscribe(res=>{
    //   this.totalItem = res.length
    // })
  }
  

  setCart(){
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.movie.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.movie.id, quantity);
    this.setCart();
  }

}

import { Movies } from "./movie";

export class CartItem{

    constructor(movie:Movies){
        this.movie = movie;
    }
    movie:Movies;
    quantity:number = 1;
    get price():number{
        return this.movie.price * this.quantity;
    }
}
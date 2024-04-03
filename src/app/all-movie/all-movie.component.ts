import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie/movie.service';
import { Movies } from '../shared/models/movie';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-all-movie',
  templateUrl: './all-movie.component.html',
  styleUrls: ['./all-movie.component.css']
})
export class AllMovieComponent implements OnInit {

  movies:Movies[]=[];
  
    constructor(private ms:MovieService, private movieService:MovieService, private cartService:CartService) {}
    
  
    ngOnInit(): void {

      this.movies! = this.ms.getAll();
      console.log(this.movies);
  
      this.movies.forEach((a:any) => {
        Object.assign(a,{total:a.price})
      });
    }

    addToCart(movie: any){
      this.cartService.addToCart(movie)
      console.log("added")
    }

}

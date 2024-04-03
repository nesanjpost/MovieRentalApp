import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { MovieService } from '../services/movie/movie.service';
import { Movies } from '../shared/models/movie';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  movie!: Movies;

  constructor(private activatedRoute:ActivatedRoute, private movieService:MovieService, private cartService:CartService, private router:Router) { 
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.movie = movieService.getMovieById(params['id'])
    })
  }

  ngOnInit(): void {
  }
  
  addToCart(){
    this.cartService.addToCart(this.movie);
    this.router.navigate(['/cart-page']);
    console.log("add to cart")
  }

}

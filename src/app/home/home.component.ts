import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie/movie.service';
import { Movies } from '../shared/models/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
movies:Movies[]=[];
// movie!: Movies;



  // constructor(private ms:MovieService, private route:ActivatedRoute, private movieService:MovieService, private cartService:CartService, private router:Router) {}

  constructor(private ms:MovieService, private route:ActivatedRoute, private cartService:CartService) {}
  

  ngOnInit(): void {

    this.movies! = this.ms.getAll();
    console.log(this.movies);

    this.movies.forEach((a:any) => {
      Object.assign(a,{total:a.price})
    });

    this.route.params.subscribe(params =>{
      if(params['searchItem'])
      this.movies = this.ms.getAll().filter(movie => movie.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else
      this.movies = this.ms.getAll();
    })

  }

  addToCart(movie: any){
    this.cartService.addToCart(movie)
    console.log("added")
  }

}

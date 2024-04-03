import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchItem: string = "";

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchItem'])
      this.searchItem = params['searchItem']

    })
  }

  search():void{
    if(this.searchItem)
    this.router.navigateByUrl('/search/'+ this.searchItem)
    console.log(this.searchItem)
  }

}


// this.route.params.subscribe(params =>{
//   if(params['searchItem'])
//   this.movies = this.ms.getAll().filter(movie => movie.name.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()));
//   else
//   this.movies = this.ms.getAll();
// })

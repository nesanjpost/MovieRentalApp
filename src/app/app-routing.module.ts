import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMovieComponent } from './all-movie/all-movie.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MoviePageComponent } from './movie-page/movie-page.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'Home', component:HomeComponent},
  {path: 'search/:searchItem', component:HomeComponent},
  {path: 'movie/:id', component:MoviePageComponent},
  {path: 'cart-page', component:CartPageComponent},
  {path: 'all-movie', component:AllMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { MovieComponent } from './components/movie/movie.component';


const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'movies/:id', component:MovieComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

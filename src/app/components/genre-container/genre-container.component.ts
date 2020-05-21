import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Genre } from 'src/app/models/genre';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-genre-container',
  templateUrl: './genre-container.component.html',
  styleUrls: ['./genre-container.component.css']
})
export class GenreContainerComponent implements OnInit,OnDestroy {

  @Input('genre') genre: Genre;

  movies: Movie[];

  private subscription:Subscription

  constructor(private readonly movieservice:MovieService , 
    private readonly router:Router) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  

  ngOnInit(): void {

    this.subscription = this.movieservice.getMoviesInGenre(this.genre.id).subscribe(data => this.movies = data);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    
    
  }

}

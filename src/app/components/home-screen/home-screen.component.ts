import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Genre } from 'src/app/models/genre';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit,OnDestroy {

  genres:Genre[] ; 

  subscription:Subscription;

  constructor(private readonly movieservice:MovieService) { }
  ngOnDestroy(): void {
   this.subscription.unsubscribe;
  }

  ngOnInit(): void {
    this.subscription = this.movieservice.getAllGenres().subscribe(data => this.genres = data.genres)

  }

}

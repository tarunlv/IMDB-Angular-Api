import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movieid:string; 
  constructor(private route: ActivatedRoute , private readonly movieservice:MovieService) { }

  title:string;
  coverimage:string;
  posterimage:string;
  description:string;
  language:string;
  popularity;
  releaseDate;
  revenue;



  ngOnInit(): void {
    this.movieid = this.route.snapshot.paramMap.get('id');
    this.movieservice.getMovieDetails(this.movieid).subscribe(obj => {
      let res:any = obj;

      this.title = res.title;
      this.coverimage = 'https://image.tmdb.org/t/p/w500' + res.backdrop_path;
      this.posterimage = 'https://image.tmdb.org/t/p/w500' + res.poster_path;
      this.description = res.overview;
      this.language = res.original_language;
      this.popularity = res.popularity;
      this.releaseDate = res.release_date;
      this.revenue = res.revenue;
      

    } );

    
  }

}

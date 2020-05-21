import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { AllGenres } from '../models/all-genres.model';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import {Movie} from './../models/movie'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private readonly http : HttpClient) { }

  private baseUrl:String =  `https://api.themoviedb.org/3`;

  private mapToMovies = (data:any) => {
    let movies = data.results.map( singlemovie => {
      let movie:Movie =  new Movie();
      movie.id=singlemovie.id
      movie.title = singlemovie.title;
      movie.poster = 'https://image.tmdb.org/t/p/w500' +singlemovie.poster_path;
      return movie
      } )
    
    return movies
  } 

  

  private defaultParams:HttpParams = new HttpParams()
    .append(`api_key`,`68e82445c8842ba8616d0f6bf0e97a41` );
  

  
  public getAllGenres():Observable<AllGenres>{
    return this.http.get<AllGenres>(this.baseUrl + `/genre/movie/list`, {
      params:this.defaultParams
    });
  }

  public getMoviesInGenre(genreId:number){
    return this.http.get<object>(this.baseUrl + `/genre/${genreId}/movies`, {
      params:this.defaultParams
    }).pipe(map(this.mapToMovies));
  }


  public getMovieDetails(movieId : string|number){
    return this.http.get<object>(this.baseUrl + `/movie/${movieId}`, {
      params:this.defaultParams
    });
  }
}

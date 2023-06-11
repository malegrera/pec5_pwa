import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Movies, Result } from '../models/movies.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<Movies> {
    return this.http.get<Movies>(
      'https://api.themoviedb.org/3/discover/movie?api_key=c5aa6a114ab7ef864483ef62ddbf4f09'
    );
  }

  getMovieById(id: String): Observable<Result> {
    return this.http.get<Result>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c5aa6a114ab7ef864483ef62ddbf4f09`
    );
  }
}

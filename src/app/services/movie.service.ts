import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public BASE_URL = 'http://localhost:9090';

  http = inject(HttpClient);

  getAllMovies(): Observable<MovieDto[]> {
    return this.http.get<MovieDto[]>(`${this.BASE_URL}/api/v1/movie/all`);
  }
}

export type MovieDto = {
  movieId?: string;
  title: string;
  director: string;
  studio: string;
  movieCast: string[];
  releaseYear: number;
  poster?: string;
  posterUrl?: string;
};

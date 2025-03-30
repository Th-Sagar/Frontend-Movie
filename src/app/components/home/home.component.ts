import { Component, inject, OnInit } from '@angular/core';
import { MovieDto, MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  movies: MovieDto[] = [];

  movieService = inject(MovieService);
  authService = inject(AuthService);

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.getAllMovies();
    }
  }

  getAllMovies() {
    this.movieService.getAllMovies().subscribe({
      next: (response) => {
        console.log('response', response);
        this.movies = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

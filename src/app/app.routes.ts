import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Movie App - Home',
    component: HomeComponent,
  },
  {
    path: 'login',
    title: 'Movie App - Login',
    component: LoginComponent,
  },
  {
    path: 'register',
    title: 'Movie App - Register',
    component: RegisterComponent,
  },

  {
    path: 'add-movie',
    title: 'Movie App - Add movie',
    component: AddMovieComponent,
  },
];

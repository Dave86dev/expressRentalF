import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MovieDisplayComponent } from './components/movie-display/movie-display.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FilmComponent } from './components/film/film.component';

const routes: Routes = [
  {path:"", redirectTo: "display", pathMatch:"full"},
  {path:"display", component:MovieDisplayComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"movie:/id", component:MovieDetailComponent},
  {path:"profile", component:ProfileComponent},
  {path:"film", component: FilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MovieDisplayComponent } from './components/movie-display/movie-display.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MovieGenreDisplayComponent } from './components/movie-genre-display/movie-genre-display.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarsComponent } from './components/search-bars/search-bars.component';
import {MatSelectModule} from '@angular/material/select';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MovieDisplayComponent,
    MovieDetailComponent,
    RegisterComponent,
    MovieGenreDisplayComponent,
    FooterComponent,
    SearchBarsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

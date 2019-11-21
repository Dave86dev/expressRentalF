import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-genre-display',
  templateUrl: './movie-genre-display.component.html',
  styleUrls: ['./movie-genre-display.component.scss']
})
export class MovieGenreDisplayComponent implements OnInit {
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movieService.getGenreMovies('science fiction')
    .subscribe(res=>this.movieService.setFilmsGenre(res));
  }

}



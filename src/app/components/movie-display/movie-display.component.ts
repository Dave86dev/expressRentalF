import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service'; 

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.scss']
})
export class MovieDisplayComponent implements OnInit {
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movieService.getDisplayMovies()
    .subscribe(
      
      res=> this.movieService.setFilms(res),
      error=>console.log(error)

    )
  }

}

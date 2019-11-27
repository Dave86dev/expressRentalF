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

    var item = document.querySelector('.scrolling-wrapper-flexbox');

    window.addEventListener('wheel', function(e) {

    if (e.deltaY > 0) item.scrollLeft += 100;
      else item.scrollLeft -= 100;
    });

    this.movieService.getDisplayMovies()
    .subscribe(
      
      res=> this.movieService.setFilms(res),
      error=>console.log(error)

    )
  }

}

import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-genre-display',
  templateUrl: './movie-genre-display.component.html',
  styleUrls: ['./movie-genre-display.component.scss']
})
export class MovieGenreDisplayComponent implements OnInit {
  id : "holaaaa";
  constructor(private movieService:MovieService) { }

  ngOnInit() {

    var item = document.querySelector('.scrolling-wrapper-flexbox2');

    window.addEventListener('wheel', function(e) {

    
    if (e.deltaY > 0) item.scrollLeft += 100;
      else item.scrollLeft -= 100;
    });


    this.movieService.getGenreMovies('science fiction')
    .subscribe(res=>this.movieService.setFilmsGenre(res));
  }

}



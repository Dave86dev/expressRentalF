import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-genre-display',
  templateUrl: './movie-genre-display.component.html',
  styleUrls: ['./movie-genre-display.component.scss']
})
export class MovieGenreDisplayComponent implements OnInit {
  id : "";
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    //same comments as on movie-display 
    var item = document.querySelector('.scrolling-wrapper-flexbox2');
    
    //we start the mouse wheel identification movement and reference it for scroll
    window.addEventListener('wheel', function(e) {

    
    if (e.deltaY > 0) item.scrollLeft += 100;
      else item.scrollLeft -= 100;
    });

    //we call the function in the movie service with the selected genre as argument
    this.movieService.getGenreMovies('science fiction')
    .subscribe(res=>this.movieService.setFilmsGenre(res));
  }

}



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
    //scroll with the mouse wheel since the main load. 

    //we keep on the variable item the properties and events of the wrap that got all the items(movies)
    var item = document.querySelector('.scrolling-wrapper-flexbox');

    window.addEventListener('wheel', function(e) {
    //positioning of the axys Y and horizontal scroll on the var item properties.  
    if (e.deltaY > 0) item.scrollLeft += 100;
      else item.scrollLeft -= 100;
    });

    this.movieService.getDisplayMovies()
    .subscribe(
      //then we display constantly the movies
      res=> this.movieService.setFilms(res),
      error=>console.log(error)

    )
  }

}

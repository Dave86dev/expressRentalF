import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  films: Object;
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    
  }

  searchMovie(event){
    
    if(event.target.value.length >= 3){
      
      this.movieService.getTitleMovies(event.target.value)
      .subscribe(res=>this.movieService.setFilms(res))
    }

  }

}

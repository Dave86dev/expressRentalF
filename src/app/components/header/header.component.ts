import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSearchActive: boolean = false;
  films: Object;
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    
  }

  searchMovie(event){

    if(event.target.value.length == 0 && this.isSearchActive){
      this.movieService.getDisplayMovies()
      .subscribe(
      
      res=> this.movieService.setFilms(res),
      error=>console.log(error)

    )
    }
    
    if(event.target.value.length >= 3){
      this.isSearchActive = true;
      this.movieService.getTitleMovies(event.target.value)
      .subscribe(res=>this.movieService.setFilms(res))
    }



  }


  searchMovieGenre(event){
    if(event.keyCode == 13){
      console.log("aaaaa");
      this.movieService.getGenreMovies(event.target.value)
      .subscribe(res=>this.movieService.setFilmsGenre(res));
    }
    
  }

}

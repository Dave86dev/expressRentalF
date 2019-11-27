import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-bars',
  templateUrl: './search-bars.component.html',
  styleUrls: ['./search-bars.component.scss']
})
export class SearchBarsComponent implements OnInit {
  isSearchActive: boolean = false;
  films: Object;
  login_b: Object;
  selected: any;
  constructor(private movieService:MovieService,
    private userService:UserService) { }

  ngOnInit() {
      this.selected = 'Family';
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

  searchMovieGenre(){
    
      console.log(this.selected);
      this.movieService.getGenreMovies(this.selected)
      .subscribe(res=>this.movieService.setFilmsGenre(res));
    
    
  }

}

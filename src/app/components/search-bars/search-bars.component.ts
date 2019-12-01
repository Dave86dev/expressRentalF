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
      //we have Family since the beginning as pre-selected movie Genre for the checklist.
      this.selected = 'Family';
  }

  searchMovie(event){

    if(event.target.value.length == 0 && this.isSearchActive){
      //if the value for the title search input is 0, we keep back to the default results.
      this.movieService.getDisplayMovies()
      .subscribe(
      
      res=> this.movieService.setFilms(res),
      error=>console.log(error)

    )
    }
    
    if(event.target.value.length >= 3){
      //if the value for the title search is at least 3, we start displaying the results for
      //a better dynamic showcase.
      this.isSearchActive = true;
      this.movieService.getTitleMovies(event.target.value)
      .subscribe(res=>this.movieService.setFilms(res))
    }

  }

  searchMovieGenre(){
    
      //console.log(this.selected);
      //we proceed to do the search of movies by genre, passing the argument this.selected
      //which contains the value to search
      this.movieService.getGenreMovies(this.selected)
      .subscribe(res=>this.movieService.setFilmsGenre(res));
    
    
  }

}

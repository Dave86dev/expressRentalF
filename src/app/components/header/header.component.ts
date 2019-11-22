import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSearchActive: boolean = false;
  films: Object;
  login_b: Object;
  constructor(private movieService:MovieService, private userService:UserService) { }
 

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
      
      this.movieService.getGenreMovies(event.target.value)
      .subscribe(res=>this.movieService.setFilmsGenre(res));
    }
    
  }


  pruebaAPI(){
    console.log("lanzaremos los datos contra la API");

    this.login_b = {
      "token": "5dd7acd94e986d25200ccd2a",
      "username" : "satan",
      "email" : "jesus"
    }
    //console.log(this.login_b);
    this.userService.sendCertainUser(this.login_b)
    .subscribe(
      
      res=> console.log(res),
      error=>console.log(error)

   )
  }

}

import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  dispChoosenFilm : any = {};
  dispChoosenFilmGenre: string = "";
  constructor(private movieService:MovieService) { }

  ngOnInit() {

    this.dispChoosenFilm = this.movieService.filmChoosen;
    
    for(let _i = 0; _i<this.dispChoosenFilm.genre_ids.length; _i++){
      //first, translation of each item, we later add it to our genre concatenated string
      this.dispChoosenFilmGenre += this.genreTranslator(this.dispChoosenFilm.genre_ids[_i]);
      this.dispChoosenFilmGenre += " ";
    }

  }

  genreTranslator(genreId){
    let res = "";

    //translator object
    let allgenres = {
      28 : "action",
      12 : "adventure",
      16 : "animation",
      35 : "comedy",
      80 : "crime",
      99 : "documentary",
      18 : "drama",
      10751 : "family",
      14 : "fantasy",
      36 : "history",
      27 : "horror",
      10402 : "music",
      9648 : "mystery",
      10749 : "romance",
      878 : "science fiction",
      10770 : "tv movie",
      53 : "thriller",
      10752 : "war",
      37 : "western"
  }

    res = allgenres[genreId];
    return res;
  }

}

import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  dispChoosenFilm : any = {};
  dispChoosenFilmGenre: string = "";
  isRent: boolean = false;
  isLog: boolean = false;
  placeOrder = {
    token: '',
    userid: '',
    idfilm: '',
    price: 0,
    days: 0
  };
  errorMsg: any = '';

  constructor(private movieService:MovieService, private orderService:OrderService, 
    private router:Router, private userService:UserService) { }


  ngOnInit() {

    //we check if the user is logged in and then we enable the rent it button.
    this.isLog = this.userService.isProfOut;
    this.dispChoosenFilm = this.movieService.filmChoosen;
    
    for(let _i = 0; _i<this.dispChoosenFilm.genre_ids.length; _i++){
      //first, translation of each item, we later add it to our genre concatenated string
      this.dispChoosenFilmGenre += this.genreTranslator(this.dispChoosenFilm.genre_ids[_i]);
      this.dispChoosenFilmGenre += " ";
    }

  }

  genreTranslator(genreId){
    let res = "";

    //translator object for the distinct genre display on the film detail page
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

    //we translate the genre by passing the id number to the object genre
    res = allgenres[genreId];
    return res;
  }

  rentIt(){
    
    //boolean value to check if the rent button has been clicked, then we show the various days options.
    this.isRent = true;
    return this.isRent;
  }

  rentItDays(cFilmId,daysR){
    //rent function with user choice days specified
    
    //id of film
    this.placeOrder.idfilm = cFilmId; 
    //number of days
    this.placeOrder.days = daysR;

    var dataLogin = JSON.parse(localStorage.getItem("datosLogin"));
    //token
    this.placeOrder.token = dataLogin["token"];
    //userid
    this.placeOrder.userid = dataLogin["userid"];

    //we proceed to use the function on the order service and rent the film
    this.orderService.newOrder(this.placeOrder)
    .subscribe(
      
      (res) => { 
        
        if(res.orderdate){

        //we briefly announce the user that the order has been made. 
        this.errorMsg = dataLogin["name"] + ", thanks for your order, heat the popcorn...your film is coming!";
        
        setTimeout(() => {
          
          //a little delay and we go directly to the user profile where the order is going to be displayed.
          this.router.navigate(['/profile'])
        }, 2000);
        }else{
          this.errorMsg = res.message;
        }
      },
      error=>console.log(error)
    )
    return;
  }

}

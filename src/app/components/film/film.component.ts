import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
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
  placeOrder = {
    token: '',
    userid: '',
    idfilm: '',
    price: 0,
    days: 0
  };

  constructor(private movieService:MovieService, private orderService:OrderService) { }


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

  rentIt(){
    
    this.isRent = true;
    return this.isRent;
  }

  rentItDays(cFilmId,daysR){
    this.placeOrder.idfilm = cFilmId;
    this.placeOrder.days = daysR;

    var dataLogin = JSON.parse(localStorage.getItem("datosLogin"));
    
    this.placeOrder.token = dataLogin["token"];
    this.placeOrder.userid = dataLogin["userid"];

    this.orderService.newOrder(this.placeOrder)
    .subscribe(
      
      (res) => { 
        console.log(res);
        // if(res.name){
        //   localStorage.setItem("datosLogin", JSON.stringify(res));

        //   var dataLogin = JSON.parse(localStorage.getItem("datosLogin"));
        
        //   this.errorMsg = "Welcombe back , " + dataLogin["name"];
        //   //console.log(dataLogin["token"]);

        // setTimeout(() => {
        //   // this.userService.isLoginReg = false;
        //   // this.userService.isProfOut = true;
        //   this.userService.loginDone();
          
        //   this.router.navigate(['/display'])
        // }, 2500);
        // }else{
        //   this.errorMsg = res.message;
        // }
      },
      error=>console.log(error)

    )
      
    return;
  }

}

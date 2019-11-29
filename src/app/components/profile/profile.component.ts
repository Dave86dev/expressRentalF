import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile : any = {};
  userProShow: any = {};
  userOrdShow: any = {};
  userMail= "";
  errorMsg = "";
  errorMsg2 = "";

  constructor(private movieService:MovieService,
    private userService:UserService) { }

  ngOnInit() {

    var dataLogin = JSON.parse(localStorage.getItem("datosLogin"));

    this.userProfile.token = dataLogin["token"];
    this.userProfile.name = dataLogin["name"];

    this.userService.showCuser(this.userProfile)
    .subscribe(
      
      (res) => { 

        if(res){
          this.userProShow = res;
          this.userMail = this.userProShow.email;
          
          //user order history implementation
          this.userService.showOrdersUser(this.userMail)
          .subscribe(
      
          (res) => { 

           if(res){
             this.userOrdShow = res;
             
           }else{
         
          this.errorMsg2 = res.message;
          }
          },
           error=>console.log(error)

          )


        }else{
          this.errorMsg = res.message;
        }
      },
      error=>console.log(error)

    )
    
    
  }

}

import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile : any = {};
  userProShow: any = {};
  userOrdShow: any = {};
  userUpdProf: any = {};
  userMail= "";
  errorMsg = "";
  errorMsg2 = "";
  errorMsg3 = "";

  constructor(private movieService:MovieService,
    private userService:UserService, private router:Router) { }

  ngOnInit() {
    //we recollect the needed data...

    var dataLogin = JSON.parse(localStorage.getItem("datosLogin"));
    //token and name from localStorage
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
             //if there are results, we show the orders from the user. 
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

  updateUser(idus){

  //IMPORTANT
  //we get the value of the inputs phone and billcard for supposed updates on the database.  
    
  let newPhone = (<HTMLInputElement>document.getElementById('phoneInput')).value;
  let newBillcard = (<HTMLInputElement>document.getElementById('billcardInput')).value;

  //in case there is no update on phone, we get the placeholder value
    if (!newPhone){
      newPhone = (<HTMLInputElement>document.getElementById('phoneInput')).placeholder;
    }

  //in case there is no update on billcard, we get the placeholder value
    if (!newBillcard){
      newBillcard = (<HTMLInputElement>document.getElementById('billcardInput')).placeholder;
    }
  //object with the user id... phone and billcard values... ready to update.
    this.userUpdProf.id = idus;
    this.userUpdProf.phone = newPhone;
    this.userUpdProf.billcard = newBillcard;

    this.userService.updateUserdata(this.userUpdProf)
    .subscribe(

      (res) => { 
        //once update function has done the job, we set a delay of 1250 msc and we go back to the display page.
        this.errorMsg3 = res;
        setTimeout(() => {

          this.router.navigate(['/display'])
        }, 1250);
      },
      error=>console.log(error)

    )
    return;
  }

}

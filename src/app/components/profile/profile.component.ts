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

  updateUser(idus){
    
  let newPhone = (<HTMLInputElement>document.getElementById('phoneInput')).value;
  let newBillcard = (<HTMLInputElement>document.getElementById('billcardInput')).value;

  if (!newPhone){
    newPhone = (<HTMLInputElement>document.getElementById('phoneInput')).placeholder;
  }

  if (!newBillcard){
    newBillcard = (<HTMLInputElement>document.getElementById('billcardInput')).placeholder;
  }

  this.userUpdProf.id = idus;
  this.userUpdProf.phone = newPhone;
  this.userUpdProf.billcard = newBillcard;

  this.userService.updateUserdata(this.userUpdProf)
  .subscribe(
      
    (res) => { 

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

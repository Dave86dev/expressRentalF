import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin = {
    email: '',
    password: ''
  };
  errorMsg = "";
  hide= true;
  res:object;
  constructor(
    private userService: UserService, private router:Router) { }

  ngOnInit() {
  }

  sendLogin(){
    
    this.userService.loginUser(this.userLogin)
    .subscribe(
      
      (res) => { 
        //in case there is a result of login coming from the backend...
        if(res.name){
          //we keep the login data on the localStorage (token..user id... username..)
          localStorage.setItem("datosLogin", JSON.stringify(res));

          var dataLogin = JSON.parse(localStorage.getItem("datosLogin"));
         
          //message granting welcome, with dynamic name 
          this.errorMsg = "Welcombe back , " + dataLogin["name"];
          this.userService.nameP = dataLogin["name"];
          
          //console.log(dataLogin["token"]);

        setTimeout(() => {
          //delay and we set the booleans to display both PROFILE and LOG OUT options
          
          this.userService.isProfOut = true;
          this.userService.loginDone();
          
          //then we reach the display page again once logged in.
          this.router.navigate(['/display'])
        }, 2500);
        }else{
          this.errorMsg = res.message;
        }
      },
      error=>console.log(error)

    )
  }

}




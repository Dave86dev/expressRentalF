import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //login_b: Object;
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

        if(res.name){
          localStorage.setItem("datosLogin", JSON.stringify(res));

          var dataLogin = JSON.parse(localStorage.getItem("datosLogin"));
        
          this.errorMsg = "Welcombe back , " + dataLogin["name"];
          this.userService.nameP = dataLogin["name"];
          
          //console.log(dataLogin["token"]);

        setTimeout(() => {
          this.userService.isProfOut = true;
          this.userService.loginDone();
          
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




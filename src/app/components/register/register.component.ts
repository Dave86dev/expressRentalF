import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userRegist = {
    username: '',
    email: '',
    phone: 0,
    billcard: 0,
    password: ''
  };
  errorMsg = "";


  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
  }

  sendRegis(){
    
    this.userService.regUser(this.userRegist)
    .subscribe(
      
      (res) => { 

        if(res.name){
          
          this.errorMsg = "Bienvenido a expRental , " + res.name + ", acabas de registrarte.";
          setTimeout(() => {
          
            this.router.navigate(['/display'])
          }, 2750);
        }else{
          this.errorMsg = res.message;
        }
      },
      error=>console.log(error)

    )
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // user:User={
  //   username:'',
  //   password:''
  // };
  res:object;
  constructor(
    private userService: UserService) { }

  // login(){
  //   this.userService.login(this.user)
  //   .subscribe(res=>{
  //     this.res=res;
  //     this.userService
  //     .setUser(res['user'])
  //     setTimeout(() => {
  //       this.router.navigate(['/discover'])
  //     }, 2500);
  //   },
  //   error=>this.res=error.error)
  // }


  ngOnInit() {
  }

}

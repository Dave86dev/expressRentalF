import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  adminResults : any = [];
  useradmin: any = {
    email: '',
    password: ''
  };
  isAdmin: boolean = true;
  isAdminOrders: boolean = false;
  errorMsg = "";
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
  }


  sendAdmin(){
    this.userService.loginAdmin(this.useradmin)
    .subscribe(
      
      (res) => { 
        if(res[0]){
          //Admin login correcto, el resultado devuelto es un array de objetos.
          this.isAdmin = false;
          this.isAdminOrders = true;

          
          for (let _i = 0; _i < res.length; _i++){
            this.adminResults[_i] = (res[_i]);
          }

        }
        
      },
      error=>console.log(error)

    )
    
    return;
  }

}

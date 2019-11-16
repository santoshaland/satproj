import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { RouterModule, Router } from '@angular/router'
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(public service:AuthService, public router : Router  ) { }

  ngOnInit() {
  }

  Login(log)
  {
    console.log(log.name,log.password);

    let logstat=this.service.Login(log);
    
    if(logstat)
    {
      this.message="";
      this.router.navigate(['home']);

    }
    else{

      this.message="user name or password is wrong";

    }


  }
 


}

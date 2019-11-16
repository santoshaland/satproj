import { Injectable } from '@angular/core';
import { RouterModule, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public roouter:Router) { }


  isLogged()
  {
    return (sessionStorage.getItem("isloggedin")=="1");
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if(this.isLogged())
    {
      return true;
    }
    else{
      this.roouter.navigate(['login']);
      return false;
    }

  }


  Login(form)
  {
    console.log(form.name,form.password);

    if(form.name=="vishal" && form.password=="vishal" )
    {
      sessionStorage.setItem("isloggedin","1");
      return true;
    }
    else{
      return false;
    }
  }


  Logout()
  {
      sessionStorage.setItem("isloggedin","1");
      this.roouter.navigate(['login']);
    
  }



}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RouterModule ,Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message: string;

  constructor(public service : DataService,public routes:Router) { }

  ngOnInit() {
  }

  Addemp(x:any)
  {
    let data=x.form.value;
    console.log(data);

    let instat=this.service.AddData(data);

    instat.subscribe((result:any)=>{
      if(result.affectedRows>0)
      {
        this.routes.navigate(['home']);
      }
      else{

        this.message="something wrong";
      }
    })

  }
  


}

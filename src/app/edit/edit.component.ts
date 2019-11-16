import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  emps: any;
  message: string;

  constructor(public route:ActivatedRoute,public routes:Router,public service:DataService) {

    let No=this.route.paramMap;
    console.log(No);
    No.subscribe((params:any)=>{
      let no=params.get("no");
      console.log(no);

      let getbyidastat=this.service.GetDataById(no);
      getbyidastat.subscribe((result:any)=>{
          this.emps=result;
      })

    })
   }

  ngOnInit() {
  }


  Update()
  {
    let upstat=this.service.UpdateData(this.emps);
    upstat.subscribe((result:any)=>{
      if(result.affectedRows>0)
      {
        this.routes.navigate(['home']);
      }
      else{
        this.message="something wrong";
        console.log(result);
      }

    })
  }
  


}

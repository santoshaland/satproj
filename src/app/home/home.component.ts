import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  emps: Object;

  constructor(public service :DataService) { 
    this.Data();
  }

  Data(){
    let getstat=this.service.Data();

    getstat.subscribe((result)=>{
      this.emps=result;
    })
  }

  ngOnInit() {
  }


  Delete(x:any){
    
    let delstat=this.service.DelData(x);

    delstat.subscribe((result:any)=>{
      if(result.affectedRows>0)
      {
        this.Data();
      }
      else{
        console.log("something wrong");
      }

    })

  }


}

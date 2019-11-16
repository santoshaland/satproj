import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }

Data()
{
  return this.http.get("http://localhost:4000/employees/");
}

AddData(emp)
{
  return this.http.post("http://localhost:4000/employees/",emp);
}

DelData(no)
{
  return this.http.delete("http://localhost:4000/employees/"+no);
}

GetDataById(no){
return this.http.get("http://localhost:4000/employees/"+no)
}

UpdateData(emp)
{
  return this.http.put("http://localhost:4000/employees/"+emp.no,emp);

}


}
